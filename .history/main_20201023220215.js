
class Question{

    isSkipped = new false;
    Qanswer = "Yes";
    rowNum = 0;
    categories = new  {"tite":"","itemType":""};

    update(rownum) {

    var  curr =  getRow(rownum);  
    var ischecked = curr.find(".mainCheck").val()
    if (ischecked=="Yes")
         this,Qanswer="No"         
    else
         this.Qanswer="No"
      
    }
}; 


 var answersCollection = []


$("#submitbtn").on("click", function () {
    
    for(var item in )
});


function getRow(row){
        return $(`[data-row==${row}]`);       
}


function ProcessExcel(data) {
 
    

    var workbook = XLSX.read(data,{type:"array"})
    //Read the Excel File data. 
    var firstSheet = workbook.SheetNames[0];
    var secondSheet = workbook.SheetNames[1];


    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
     
    var headerRow = excelRows[0]
    var Qobject = new Question();
  
    var table1= $("<table />") 

    for (var i = 1; i < excelRows.length; i++) {        

       //GET DATA FROM EXCEL ROW
        currentRow = excelRows[i];

        Object.keys(headerRow).forEach(function(key) {
           //set object keys 
            Qobject[key] = currentRow[key]              
        
        } )
       
        var tableRow = $(`<tr rowspan=2  data-rownum=${i} > </tr>`);
        var question_td = $(".questCol").clone(true,true);
        var inputCols_td = $(".inputCol").clone(true,true)

        question_td.find(".questionLabel").html(Qobject.Standard)
        
        tableRow.append(question_td,inputCols_td)
        table1.append(tableRow)
     } 
        $("#form1").html(table1)

    //process second sheet

    var excelRows2 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[secondSheet]);
    var headerRow2 = excelRows2[0]
    var titleList =[]
    for (var i = 1; i < excelRows2.length; i++) {        
     
        currentRow = excelRows2[i];

        Object.keys(headerRow2).forEach(function(key) {
            //set object keys 
             Qobject[key] = currentRow[key]              
         
         } )
}

};





$(document).ready(function () {


   $("#testblock").bind(function(e){
       this.html(e)
   })
  


    //Reference the FileUpload element.
    var host = location.origin
    var Url = host + "/QuestionData.xlsx";      
    var req = new XMLHttpRequest();
    req.open("GET", Url, true);
    req.responseType = "arraybuffer";     
    req.onload = function(e) {
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

    
})
