
var answersCollection = {};
 var currentTitle = [];


 function getDate() {
     var d = new Date();

     var month = d.getMonth() + 1;
     var day = d.getDate();

     return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();
 }


 class Question {

     isSkipped = "No";
     isSkippedReason = "None"
     Qanswer = "Yes";
     date_started = getDate()

     constructor(ID = null) {
         this.id = ID;
     }


 };


 function getRow(row) {
     return $("table tr").find(`[data-rownum=${row}]`)
 }

 //  function ProcessExcel(data) {

// //Read and process from Excel Sheet 



 //      var workbook = XLSX.read(data, {
 //          type: "array"
 //      })
 //      //Read the Excel File data. 
 //      var firstSheet = workbook.SheetNames[0];
 //      var secondSheet = workbook.SheetNames[1];


 //      //Read all rows from First Sheet into an JSON array.
 //      var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

 //      var headerRow = excelRows[0]


 //      var table1 = $("<table />")

 //      for (var i = 1; i < excelRows.length; i++) {
 //          //create  instance of question class 
 //          var Qobject = new Question(i);
 //          //GET DATA FROM EXCEL ROW
 //          currentRow = excelRows[i];
 //          Object.keys(headerRow).forEach(function (key) {
 //              //set object keys 
 //              Qobject[key] = currentRow[key]

 //          })
 //          var currID = Qobject.id
 //          answersCollection[currID] = Qobject; 
 //          var tableRow = $(`<tr rowspan=2 data-rownum=${i} > </tr>`);
 //          var question_td = $(".questCol").clone(true, true);
 //          var inputCols_td = $(".inputCol").clone(true, true)

 //          question_td.find(".questionLabel").html(i+". " + Qobject.Standard)

 //          tableRow.append(question_td, inputCols_td)
 //          table1.append(tableRow)
 //      }


 //      $("#form1").html(table1)

 //      //process second sheet

 //      var excelRows2 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[secondSheet]);
 //      var headerRow2 = excelRows2[0]

 //      var col = $("<option > </option>")
 //      for (var i = 1; i < excelRows2.length; i++) {
 //          var temp = {}
 //          currentRow = excelRows2[i];

 //          Object.keys(headerRow2).forEach(function (key) {
 //              //set object keys 
 //              temp[key] = currentRow[key]

 //          })
 //          if (temp.Title != undefined) {

 //              var txt = String(temp.Title).replace(/\s/g, "");

 //              //    txt=txt.toLowerCase()
 //              var col = $(`<option val=${txt} >${temp.Title} </option>`)

 //              $("#selectProject").append(col)
 //              projectTypeArray.push(temp)
 //          }
 //      }
 //  }
 

 function processJSONQuestionsArray(Qcollection, tcollection) {
     var table1 = $("<table />")
     var tempheading = "Propose"
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

         answersCollection[currID] = Qobject;
         var tableRow = $(`<tr rowspan=2 data-rownum=${currID} > </tr>`);




         if (tempheading != prevtempheading) {
             table1.append(`<h1 id ="h${count}">${tempheading}</h1>`)             
             prevtempheading = tempheading
         }
         var question_td = $(".questCol").clone(true, true);
         var inputCols_td = $(".inputCol").clone(true, true)
         var altCol_td = $(".altCol").clone(true, true);

         question_td.find(".questionLabel").html(Qobject.Standard)

         tableRow.append(question_td, inputCols_td, altCol_td)
         table1.append(tableRow)

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

 //
 function checkSubmit(){
    if ($("textarea").val() == "" || $("textarea").val() == " ") {
 
       $("#submitbtn").addClass("disabled")
    }
    else{ 
       $("#submitbtn").removeClass("disabled")
    }
 }
 

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



 $(document).ready(function () {
     

     var checkboxes = document.getElementsByTagName('input');

     for (var i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].type == 'checkbox') {
             checkboxes[i].checked = false;
         }
     }

     $("tr .mainCheck").change(checkState)

     //Load array information for page( )
     processJSONQuestionsArray(questionsArray, projectTypeArray)


     // SUBMIT 
     $("form").submit(function (e) {
        
         if ($(".vis").val() == "" || $(".vis").val() == " " || $(".vis").val()== "" || $(".vis").val() == " ") {
             confirm("Please complete additional questions underneath questions!").done()
             return console.log("Nope!");
         }
         var beforeTest = answersCollection;
         //  Object.keys(answersCollection).forEach(function (key) {
         //      answersCollection[key] = answersCollection[key].update()
         //  }).replace(/[^\w\s]/gi, '')

         var postData = [];
         var jsonString = {};
         //update 
         Object.keys(answersCollection).forEach(function (key) {

             // $("#testblock").html("<br/><br/>Before : "+ JSON.stringify(beforeTest[key])+"<br/><br/><br/>Sumbited :\n\n " +  JSON.stringify(answersCollection[key]))
             answersCollection[key]["full_name"] = $("#fullname").val()
             answersCollection[key]["data_completed"] = getDate()
             answersCollection[key]["projectType"] = $("#selectProject").val()
             //  answersCollection[key]["portfolioOrT1"] = $("#selectPortfolio").html()
             postData.push(answersCollection[key]);
             jsonString.push(answersCollection)
         });


         var address = "https://prod-127.westus.logic.azure.com/workflows/20d1f86a228a4644a73ab3319bb3fbb8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8rjxYAFbO8C4iEqE_DM34gxYPOI_KjwDA7INnKxFmwQ"



         $("#testblock").html("<br/><br/>Before : " + postData[0])
         $.ajax({
             url: address,
             type: "POST",
             data: JSON.stringify(postData),
             contentType: "application/json; charset=utf-8",
             dataType: "json"

         })




     });


     //  $("#radioBtnBox input").change(function () {
     //      var portfolioOptions = $("#selectPorfolio")
     //      var projectOptions = $("#selectProject")
     //      if ($(this).val() === 'Portfolio') {

     //          portfolioOptions.show();
     //          portfolioOptions.closest("label").show();

     //      } else {

     //          portfolioOptions.hide();
     //          portfolioOptions.closest("label").hide();
     //      }


     //  })


     $("textarea").change(function (e) {

         var Row = $(this).closest("tr")
         var skiptextElemtxtArea = Row.find("textarea");

         var rowID = Row.data(`rownum`);

         answersCollection[rowID]["isSkippedReason"] = $(this).val();

     });


     //fUNCTION tO CHECK STATE OF MAIN CHECK BOX 
     function checkState(e) {
            checkSubmit()
            

             var Row = $(this).closest("tr")
             var labelElem = $(this).closest("tr").find(".mainChoice")
             var rowID = Row.data(`rownum`);
        
             var currTxt = labelElem.html()
          
             

             if ($(this).is(":checked")) {
                 labelElem.html("Yes")
                 answersCollection[rowID]["Qanswer"] = "Yes"
                 Row.find("textarea").hide().removeClass("vis")
                 Row.find(".altCol input").hide()
             } else {
                 labelElem.html("No")
                 answersCollection[rowID]["Qanswer"] = "No"
                 Row.find("textarea").show().addClass("vis")
                 Row.find(".altCol input").show()
                }
         }
        
         function toggleCheckState(text, elem) {
             if (elem.text == "Yes")
                 elem.text == "No"
             else
                 elem.text == "Yes"
         }
        
     $("input.skipCheck").change(function (e) {
        checkSubmit()
         var Row = $(this).closest("tr");
         var skiptextElemtxtArea = Row.find("textarea");
         var rowID = Row.data(`rownum`);


         if ($(this).is(" :checked")) {
             
            skiptextElemtxtArea.show()
             skiptextElemtxtArea.addClass("vis")
             answersCollection[rowID]["isSkipped"] = "Yes"
             answersCollection[rowID]["Qanswer"] = "Skipped"
             Row.find(".mainCheckContainer").addClass("disabled")
             Row.find(".altCol input").hide()
             
         } else {
            if(Row.find(".mainChoice").html()=="No"){
                     Row.find(".altCol input").show()
                     }else{Row.find(".altCol input").hide()
                             skiptextElemtxtArea.hide()}
 
                     answersCollection[rowID]["isSkipped"] = "No"
                    
                 
                    $(".mainCheckContainer").removeClass("disabled")
                    }

                            

 
})

})