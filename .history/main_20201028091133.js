  //////////////////////////////////////////////////////////////Question Data

  ///////////Question Array

  var questionsArray = [{
      "QID": "Pro/1.03",
      "Standard": "Architecture Spec - Vision​ completed and approved by technical governance bodies",
      "Stage": "Propose"
  }, {
      "QID": "Pro/1.04",
      "Standard": "Define the change story and identify your stakeholders. Determine the high-level Change Management budget required",
      "Stage": "Propose"
  }, {
      "QID": "Pro/2.01",
      "Standard": "Develop a Business Case for approval by internal and central governance, per Business Case – minimum data. Tier 1s use the Project Finance Evaluation Tool",
      "Stage": "Discover"
  }, {
      "QID": "Pro/2.02",
      "Standard": "Capture, prioritise and obtain approval of sufficient requirements to set the scope boundaries for the initiative, to enable forecasting and to inform the design process, per the SDLC Minimum Control Standards for Solution Requirements.",
      "Stage": "Discover"
  }]

  ///////////ProjectType Array

  var projectTypeArray = ["DPMO - EO", "DPMO - NAO", "DPMO - AUSPAC", "Group HR", "Group Finance", "GSSC"]


  /////////////////End of preloaded Question Data section 

  var answersCollection = {};
  var currentTitle = [];
  class Question {
      //holds question data for sumbit event. 
      isSkipped = "No";
      reason = "N/A"
      Qanswer = "N/A";
      date_started = getDate()
      target = "01/01/2001"

      constructor(ID = null) {
          this.id = ID;
      }
  };


  function getDate() {
      //get Current Date and return a string in UK time format

      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var hours = d.getHours();

      var minutes = d.getMinutes();
      var seconds = d.getSeconds()

      return d.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + 'T' + (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ".000Z";
  }

  function getRow(row) {
      //return row by rownum data  as jquery obnject
      return $("table tr").find(`[data-rownum=${row}]`)
  }

  function processExcel(data) {
      //Read and process from ExcelSheet.xlsx. Must be in specific format : 2 sheets. All sheets first row must be headers. 1st sheet  must have headers "QID"  and "Standard" , for thier question ID and 
      // questions text columns respectively. 

      var workbook = XLSX.read(data, {
          type: "array"
      })
      //Read the Excel File data. 
      var firstSheet = workbook.SheetNames[0];
      var secondSheet = workbook.SheetNames[1];
      //Read all rows from First Sheet into a JSON array.
      var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
      //get header row for row collection
      var headerRow = excelRows[0]
      var table1 = $("<table />")
      //do this  for all excel rows
      for (var i = 1; i < excelRows.length; i++) {
          //create  instance of question class 
          var Qobject = new Question(i);
          //GET DATA FROM EXCEL ROW
          currentRow = excelRows[i];
          Object.keys(headerRow).forEach(function (key) {
              //set data from current question into object from each column found in header row
              Qobject[key] = currentRow[key]
          })
          var currID = Qobject.id
          answersCollection[currID] = Qobject;
          var tableRow = $(`<tr rowspan=2 data-rownum=${i} > </tr>`);
          var question_td = $(".questCol").clone(true, true);
          var inputCols_td = $(".inputCol").clone(true, true)
          var altCols_td = $(".altCol").clone(true, true)
          //set html label of question row on page
          question_td.find(".questionLabel").html(i + ". " + Qobject.Standard)
          tableRow.append(question_td, inputCols_td, altCols_td)
          table1.append(tableRow)
      }

      //add  constructed table to form element  
      $("#form1").html(table1)

      //process second sheet
      var excelRows2 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[secondSheet]);
      var headerRow2 = excelRows2[0]
      var col = $("<option > </option>")

      //apply second sheet data to html elements and store in js arrays
      for (var i = 1; i < excelRows2.length; i++) {
          var temp = {}
          currentRow = excelRows2[i];

          Object.keys(headerRow2).forEach(function (key) {
              //set object keys 
              temp[key] = currentRow[key]
          })
          if (temp.Title != undefined) {
              var txt = String(temp.Title).replace(/\s/g, "");
              //    txt=txt.toLowerCase()
              var col = $(`<option val=${txt} >${temp.Title} </option>`)
              $("#selectProject").append(col)
              projectTypeArray.push(temp)
          }
      }
  }

  //Process in-line array questions  store in array in first section of this page
  function processJSONQuestionsArray(Qcollection, tcollection) {
      var table1 = $("<table />")
      //first string value in array
      var tempheading = "Propose"
      //prev set to Null to trigger first heading
      var prevtempheading = "null"
      count = 1;

      (Qcollection).forEach(function (item) {
          //create  instance of question class
          var Qobject = new Question(count)
          //set current object to object in Qcollection
          currentQ = item;
          Object.keys(currentQ).forEach(function (cQkey) {
              //set object keys 
              Qobject[cQkey] = currentQ[cQkey]

          })
          var currID = Qobject.id
          //store Qobject by Curr ID 
          answersCollection[currID] = Qobject;
          //set row ID same as currID, thereby linking object 
          var tableRow = $(`<tr  id="questionRow" rowspan=2 data-rownum=${currID} > </tr>`);

          //Assuming array questions are ordered by their project type, check for the diff of temp and prev arrays. trigger when found and insert a new heading.  
          if (tempheading != prevtempheading) {
              table1.append(`<h1 id ="h${count}">${tempheading}</h1>`)
              //event trigerred so update previous heading  to current one
              prevtempheading = tempheading
          }
          //clone template html elements down to their children
          var question_td = $(".questCol").clone(true, true);
          var inputCols_td = $(".inputCol").clone(true, true)
          var altCol_td = $(".altCol").clone(true, true);

          //find label and add question txt to it 
          question_td.find(".questionLabel").html(Qobject.Standard)
          tableRow.append(question_td, inputCols_td, altCol_td)
          table1.append(tableRow)
          //change current temp to new temp heading 
          tempheading = Qobject["Stage"]
          count++;
      })

      $("#form1").html(table1)
      //process projectTypeArray


      var temp = {}
      temp = tcollection
      for (let i = 0; i < temp.length; i++) { //set object keys 
          var txt = (temp[i]).replace(/\s/g, "");
          //    txt=txt.toLowerCase()
          var col = $(`<option val=${txt} >${temp[i]} </option>`)
          $("#selectProject").append(col)
      }
  }



  ////////////////////////////////////////////////////////////////////////////////////////////
  //This section is for processing from excell . Comment out if using inline data 
  //  $(document).ready(function () {

  //      $("tr .mainCheck").change(checkState)

  //      //Reference the FileUpload element.
  //      var host = location.origin
  //      var Url = host + "/QuestionData.xlsx";
  //      var req = new XMLHttpRequest();
  //      req.open("GET", Url, true);
  //      req.responseType = "arraybuffer";
  //      req.onload = function (e) {
  //          var Data = new Uint8Array(req.response);
  //          ProcessExcel(Data)
  //          /* DO SOMETHING WITH workbook HERE */
  //      }
  //      req.send();
  //      // $.ajax({
  //      //     url: Url,
  //      //     success:function(Data){
  //      //       Data = excel.Workbooks.Open(Data)
  //      //       ProcessExcel(Data)
  //      //     }
  //      // })    
  ////////////////////////////////////////////////////////////////////

  function checkAllCheckboxes(mybool = true) {
      var checkboxes = document.getElementsByTagName('input');
      for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].type == 'checkbox' && checkboxes[i].className == "mainCheck") {
              checkboxes[i].checked = mybool;
          }

      }
      if (mybool) {
          $(".mainChoice").html("Yes")
          $(".altCol *").hide().removeClass("vis")
          $("textarea.altCol").removeClass("vis")
      } else {
          $(".mainChoice").html("No")
          $("textarea.altCol").addClass("vis")
      }
      checkSubmit()
  }

  function checkState(e) {
      //CHECK STATE OF MAIN CHECK BOX     

      //caputure  element specific data
      var Row = $(this).closest("tr")
      var labelElem = Row.find(".mainChoice")
      var textarealabel = Row.find(".altCol #textarealabel")
      var datepickerlabel = Row.find(".altCol #datepickerlabel")
      var rowID = Row.data(`rownum`);
      var currTxt = labelElem.html()
      var textArea = Row.find("textarea")
      var datepicker = Row.find(".altCol input")
      //Trigger rules 
      if ($(this).is(":checked")) {
          labelElem.html("Yes")
          answersCollection[rowID]["Qanswer"] = "Yes"
          textArea.hide().removeClass("vis")
          datepicker.hide().removeClass("vis")
          textarealabel.hide().removeClass("vis")
          datepickerlabel.hide().removeClass("vis")
      } else {
          labelElem.html("No")
          answersCollection[rowID]["Qanswer"] = "No"
          textArea.show().addClass("vis")
          datepicker.show().addClass("vis")
          textarealabel.show().addClass("vis")
          datepickerlabel.show().addClass("vis")
      }
      checkSubmit()
  }

  function toggleCheckState(text, elem) {
      if (elem.text == "Yes")
          elem.text == "No"
      else
          elem.text == "Yes"
  }


  ///CheckSubmit definition
  function checkSubmit() {

      var submitButton = $('#submitbtn')
      var itextareatotal = 0
      var ifullname = 0
      var itextarea = 0
      var idate = 0


      $('#fullname').each(function () {
          if (this.value.length < 2) {
              ifullname += 1;
          } else {
              ifullname += 0;
          }
      });


      $('textarea.vis').each(function () {
          if (this.value.length < 2) {
              itextarea += 1;
          } else {
              itextarea += 0;
          }


      })


      $('input.datepicker.vis').each(function () {
          if (this.value.length < 2) {
              idate += 1;
          } else {
              idate += 0;
          }

      })

      if (ifullname == 0 && itextarea == 0 && idate == 0) {

          submitButton.removeClass('disabled');
          return;
      } else {
          submitButton.addClass('disabled')
      }

  }


  // function checkSubmit() {

  //     var submitButton = $("#submitbtn")
  //     //simple check if every visible text area .required has been filled out. if it is enable to the out 
  //     var ifullname = $("input#fullname")
  //     var itextarea = $("textarea.vis")
  //     var idate = $("input.datepicker.vis")
  //     if (ifullname.val() == " " || itextarea.val() == " " || ifullname.val() == "" || itextarea.val() == "" || idate.val() == "") {
  //         submitButton.addClass("disabled")
  //         return;
  //     }
  //     submitButton.removeClass("disabled")

  // }


  function updateDate() {
      var Row = $(this).closest("tr")
      var rowID = Row.data(`rownum`);
      answersCollection[rowID]["target"] = $(this).val();
  }

  function download(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], {
          type: contentType
      });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();

  }


  $(document).ready(function () {
      checkSubmit()
      checkAllCheckboxes(false);
      // Generate questions and event handlers
      $("input#fullname").on("keydown", checkSubmit())
      $("input.mainCheck").change(checkState)
      //Load array information for page( )

      processJSONQuestionsArray(questionsArray, projectTypeArray)
      // SUBMIT  function 
      $("form").submit(function (e) {
         
          //additional check just in case 

          var beforeTest = answersCollection;
          var postData = [];
          var jsonString = {};

          //update 
          Object.keys(answersCollection).forEach(function (key) {

              answersCollection[key]["full_name"] = $("#fullname").val()
              answersCollection[key]["data_completed"] = getDate()
              answersCollection[key]["projectType"] = $("#selectProject").val()

              //  answersCollection[key]["portfolioOrT1"] = $("#selectPortfolio").html()            
              postData.push(answersCollection[key]);
          });

          // $("#testblock").html("<br/><br/><br/>Submitted : " +  JSON.stringify(postData))
          var addresss = "#"
          var jsonpostdata = JSON.stringify(postData)

          //////ajax one
          $.ajax({
              url: address,
              type: "POST",
              data: jsonpostdata,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              suc: function (jqh) {
                  confirm(jqh)
                  if (jqh == 202 || jqh == 200) {
                      confirm("Form has been completed successfully. Thanks!");
                      window.location.href = "https://Google.com"
                  } else {
                      alert("There's been an error, please, try submitting again or contact the PWA Admins. errorcode = " + jqh)
                  }
              },
              error: (function (jqHXR, exception) {
                  alert(`It seems there's an error. ${jqHXR.status}. Hmm. Email this JSON to this address.Thanks!`);
                  download(JSON.stringify(postData), 'json.txt', 'text/plain')
              })
          }); 

      })

      $("textarea").change(function (e) {
          //update  Qobject skipping reseason field to reflect current text area
          var Row = $(this).closest("tr")
          var rowID = Row.data(`rownum`);
          answersCollection[rowID]["reason"] = $(this).val();
          checkSubmit()

      });


      $("input.skipCheck").change(function (e) {
          checkSubmit()
          var Row = $(this).closest("tr");
          var skiptextElemtxtArea = Row.find("textarea");
          var rowID = Row.data(`rownum`);
          var maincheck = Row.find(".mainCheck")
          var mCContainer = Row.find(".mainCheckContainer")
          var datepicker = Row.find(".altCol input")

          if ($(this).is(" :checked")) {
              skiptextElemtxtArea.show()
              skiptextElemtxtArea.addClass("vis")
              answersCollection[rowID]["isSkipped"] = "Yes"
              answersCollection[rowID]["Qanswer"] = "Skipped"
              mCContainer.addClass("disabled")
              datepicker.hide().removeClass("vis")
          } else {
              datepicker.show().addClass("vis")
              if (Row.find(".mainChoice").html() == "No") {

              } else {
                  datepicker.hide().removeClass("vis")
                  skiptextElemtxtArea.hide().removeClass("vis")
              }
              answersCollection[rowID]["isSkipped"] = "No"
              mCContainer.removeClass("disabled")
          }
          checkSubmit()
      })
  })