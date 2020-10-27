class Question{
    isSkipped = false;
    Qanswer = "Yes"
    rowNum = 0
 
    update() {

        curr =$(`.tr[rownum==${this.rowNum}] .mainChoice`)
        if (this.Qanswer=="Yes"){
            curr.html("No")
            this.Qanswer = "No"
        }else{ 
            curr.html("Yes")
            this.Qanswer = "Yes"
        }
    }

}; 

title_ItemTypeDict = {
    "AUSPAC": "Portfilio",
    "BB UW&P": "Portfilio",
    "EO": "Portfilio",
    "Cyber": "Portfilio",
    "NA": "Portfilio",
    "BB Claims": "Portfilio",
    "IT Transformation": "Portfilio",
    "Group": "Portfilio",
    "DPMO - EO": "Project",
    "DPMO - NAO": "Project",
    "DPMO - AUSPAC": "Project",
    "Group HR": "Project",
    "Group Finance": "Project",
    "GSSC": "Project",
    "RISKsight": "Tier 1 Programme",
    "Insights": "Tier 1 Programme",
    "Optimum": "Tier 1 Programme",
    "BB UW&P": "Tier 1 Programme",
    "Majesco": "Tier 1 Programme",
    "Cyber": "Tier 1 Programme",
    "BB Claims": "Tier 1 Programme",
    "MtM": "Tier 1 Programme",
    "FTP": "Tier 1 Programme",  
    "Strategic P ricing": "Tier 1 Programme"
}

function ProcessExcel(data) {
 
    

    var workbook = XLSX.read(data,{type:"array"})
    //Read the Excel File data. 
    var firstSheet = workbook.SheetNames[0];
    var secondSheet = workbook.SheetNames[1];


    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 

    //Add the label cell
    var question_td = $(".questCol").clone(true,true);
    var question_label = question_td.find('.questionLabel')
    
    //Add input block 
    var input_td = $(".inputCol").clone(true,true)
   
    
    var headerRow = excelRows[0]
    var Qobject = new Question();

    //Add the data rows from Excel file.
       for (var i = 1; i < excelRows.length; i++) {
         
    //Create a HTML Table Row element.
    var tableRow = $(`<tr data-rownum=${i}  />`);
       tbody = $("<tbody />")
       tableRow.css("border-bottom","1px solid black");
        //GET DATA FROM EXCEL ROW
        currentRow = excelRows[i];

        Object.keys(headerRow).forEach(function(key) {
            Qobject[key] = currentRow[key]              
        } )
        // set ObjectRow Num
        
        Qobject.rowNum = i; 
        //get Question text
        question_label.html(Qobject.Standard)
       
        //add QuestionText to HTML ROW
        tableRow.append(question_td)

        //set rownum same as class Row        
        tableRow.append(input_td)
        tbody.append(tableRow)
    }
    $("tbody .hidden").remove();
    $("#formtable1").append(tbody)
};





$(document).ready(function () {

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
