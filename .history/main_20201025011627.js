 var answersCollection = {};
 var titleList = [];
 var currentTitle = [];
 class Question {

     isSkipped = "No";
     Qanswer = "Yes";
     categories = {};
 
     constructor(ID = null) {
         this.id = ID;
     }


     setCheckState = function (text, instance, elem) {
         instance.text = elem.text
     };

 }


 Question.prototype.update = function () {

   
     var skipped = () => { 
          var relRow = getRow(this.id)
          var checkBox = relRow.find(".mainCheck")
         relRow.find(".skipCheck").is(":checkes")
     }
     

     this.setCheckState("Qanswer", this, checkBox)
     if (skipped)
         this.isSkipped = "Yes"
     else
         this.isSkipped = "No"

     return this;
 }

 

 function checkState(e) {

     item = $(e.val().html()) 
     item.css({"border:":"12px solid red","background-color":"yellow"}) 
   

 }





 function toggleCheckState(text, elem) {
     if (elem.text == "Yes")
         elem.text == "No"
     else
         elem.text == "Yes"
 }




 function getRow(row) {
     return $("table").find(`[data-row=${row}]`)
 }


 function ProcessExcel(data) {



     var workbook = XLSX.read(data, {
         type: "array"
     })
     //Read the Excel File data. 
     var firstSheet = workbook.SheetNames[0];
     var secondSheet = workbook.SheetNames[1];


     //Read all rows from First Sheet into an JSON array.
     var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

     var headerRow = excelRows[0]


     var table1 = $("<table />")

     for (var i = 1; i < excelRows.length; i++) {
         //create  instance of question class 
         var Qobject = new Question(i);
         //GET DATA FROM EXCEL ROW
         currentRow = excelRows[i];
         Object.keys(headerRow).forEach(function (key) {
             //set object keys 
             Qobject[key] = currentRow[key]

         })
         var currID = Qobject.id
         answersCollection[currID] = Qobject;
         var tableRow = $(`<tr rowspan=2 data-rownum=${i} > </tr>`);
         var question_td = $(".questCol").clone(true, true);
         var inputCols_td = $(".inputCol").clone(true, true)

         question_td.find(".questionLabel").html(Qobject.Standard)

         tableRow.append(question_td, inputCols_td)
         table1.append(tableRow)
     }


     $("#form1").html(table1)

     //process second sheet

     var excelRows2 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[secondSheet]);
     var headerRow2 = excelRows2[0]

     var col = $("<option > </option>")
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
             titleList.push(temp)
         }
     }
 }


 $(document).ready(function () {

     $(".switch .mainCheck").change(function (e) {
          checkState(this)
        })
          
     //Reference the FileUpload element.
     var host = location.origin
     var Url = host + "/QuestionData.xlsx";
     var req = new XMLHttpRequest();
     req.open("GET", Url, true);
     req.responseType = "arraybuffer";
     req.onload = function (e) {
         var Data = new Uint8Array(req.response);
         ProcessExcel(Data)
         /* DO SOMETHING WITH workbook HERE */
     }
     req.send();
     // $.ajax({
     //     url: Url,
     //     success:function(Data){
     //       Data = excel.Workbooks.Open(Data)
     //       ProcessExcel(Data)
     //     }
     // })    


     $("form").submit(function (e) {
         e.preventDefault(); 
         
         alert("Handler for .submit() called."); 
         var  beforeTest =  answersCollection; 

         Object.keys(answersCollection).forEach(function (key) {
             answersCollection[key] = answersCollection[key].update()
         })

 
        
         Object.keys(answersCollection).some(function (key) {
          

            $("#testblock").html("<br/><br/>Before : "+ JSON.stringify(beforeTest[key])+"<br/><br/><br/>Sumbited :\n\n " +  JSON.stringify(answersCollection[key]))
            $("#testblock").css({"font-size":"17px"})

            return key == 1; 
         });
       

     });


     $("#radioBtnBox input").change(function () {
         var portfolioOptions = $("#selectPorfolio")
         var projectOptions = $("#selectProject")
         if ($(this).val() === 'Portfolio') {
            
             portfolioOptions.show();
        
         } else {
            portfolioOptions.hide();
         }


     })

 })