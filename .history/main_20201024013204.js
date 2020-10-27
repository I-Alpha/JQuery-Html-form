 
 var answersCollection = {};
 var titleList = [];
 var currentTitle =[];
 class Question {

     isSkipped = "No";
     Qanswer = "Yes";
     categories = {};
  
     constructor(ID = null) {
         this.id = ID;
     }
   

      Update = ()=>{
         var relRow = getRow(this.id)
         var rowCheck = relRow.find(".mainCheck")
         toggleCheckState("Qanswer", rowCheck)
     }


     toggleCheckState(text, elem) {
         if (elem.text == "Yes")
             this.Qanswer = "No"
         else
             this.Qanswer = "Yes"


     };

 }
 

 function getRow(row) {
     return $(`tr[data-row==${row}]`)
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
         var temp={}
         currentRow = excelRows2[i];

         Object.keys(headerRow2).forEach(function (key) {
             //set object keys 
              temp[key]  =  currentRow[key]
                
            })
         if  (temp.Title != undefined){

          var txt = String(temp.Title).replace(/\s/g, "");
           
        //    txt=txt.toLowerCase()
            var col = $(`<option val=${txt} >${temp.Title} </option>`)
        
            $("#selectProject").append(col)
            titleList.push(temp)    
        }6
        }
    }
  

 $(document).ready(function () {


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

     Submitbtn = $("submitbtn")

     Submitbtn.on("click", function (e) {

          

     });

     $("form").submit(function (e) {
         alert("Handler for .submit() called.");
         for( var i; i< answersCollection.length;i++) {

            answersCollection.i.update
        }
         e.preventDefault();

     });

 })