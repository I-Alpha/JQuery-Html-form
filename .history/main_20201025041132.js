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



 function checkState(e) {  

   var Row =$(this).closest("tr")
   var labelElem =$(this).closest("tr").find(".mainChoice")
   var rowID=Row.data(`rownum`);
   
   var currTxt  =  labelElem.html()

   if (currTxt=="Yes"){
         labelElem.html("No")
         labelElem.data('rownum') = "No" 
   }else   
      labelElem.html("Yes")    
      labelElem.data('rownum') = "Yes"

 }

function toggleCheckState(text, elem) {
     if (elem.text == "Yes")
         elem.text == "No"
     else
         elem.text == "Yes"
 }


 $(document).ready(function () {

     $("tr .mainCheck").change(checkState)
          
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
         
        
         var  beforeTest =  answersCollection; 

        //  Object.keys(answersCollection).forEach(function (key) {
        //      answersCollection[key] = answersCollection[key].update()
        //  }).replace(/[^\w\s]/gi, '')
        
          var jsonString; 
        var postData =[]; 
         Object.keys(answersCollection).some(function (key) {          

            $("#testblock").html("<br/><br/>Before : "+ JSON.stringify(beforeTest[key])+"<br/><br/><br/>Sumbited :\n\n " +  JSON.stringify(answersCollection[key]))
            $("#testblock").css({"font-size":"17px"})
            postData.push(answersCollection[key])
           
           
            
            return key == 1; 
         });
          

         var address ="https://prod-127.westus.logic.azure.com/workflows/20d1f86a228a4644a73ab3319bb3fbb8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8rjxYAFbO8C4iEqE_DM34gxYPOI_KjwDA7INnKxFmwQ"
              

                var address2 = "https://prod-125.westus.logic.azure.com:443/workflows/4c0a70f8f4d14d7c96bb064e28d1dfde/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=87g0zWdFqba8Tdr6mXBldnlN_Dx0CS39tWComZrDSuY"



  
            var rawdata = JSON.stringify(answersCollection)

            $.post(address,  JSON.stringify(postData).replace('/\//g',' '), 'json');

        //    $.post(address2, rawdata) ;
  
         alert("Handler for .submit() called."); 
                   
      
     });


     $("#radioBtnBox input").change(function () {
         var portfolioOptions = $("#selectPorfolio")
         var projectOptions = $("#selectProject")
         if ($(this).val() === 'Portfolio') {
            
             portfolioOptions.show();  
             portfolioOptions.closest("label").show();
             
         } else {
             
            portfolioOptions.hide();
            portfolioOptions.closest("label").hide();
         }


     })

 })