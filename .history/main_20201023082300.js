
  title_ItemTypeDict = {
    "AUSPAC":"Portfilio",
    "BB UW&P":"Portfilio", 
    "EO":"Portfilio",
    "Cyber":"Portfilio",
    "NA":"Portfilio",
    "BB Claims":"Portfilio",
    "IT Transformation":"Portfilio",
    "Group":"Portfilio",
    "DPMO - EO":"Project", 
    "DPMO - NAO":"Project", 
    "DPMO - AUSPAC":"Project", 
    "Group HR":"Project", 
    "Group Finance":"Project", 
    "GSSC":"Project",
    "RISKsight":"Tier 1 Programme", 
    "Insights":"Tier 1 Programme",
    "Optimum":"Tier 1 Programme", 
    "BB UW&P":"Tier 1 Programme",
    "Majesco":"Tier 1 Programme",
    "Cyber":"Tier 1 Programme",
    "BB Claims":"Tier 1 Programme",
    "MtM":"Tier 1 Programme", 
    "FTP":"Tier 1 Programme"    , 
    "Strategic P ricing":"Tier 1 Programme"}




$(document).ready(function () {

    function ProcessExcel(data) {
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
       
        var firstSheet = workbook.SheetNames[0];
        var secondSheet = workbook.SheetNames[1];

 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        //Create a HTML Table Row element.
        var tableRow = $("<tr/>");
        tableRow.borderBottom = "1";
 
        //Add the label cell
       var questionLabel = $("<label/>")
 
       //Add input block 
       var inputBlock = $(".inputContainer *")

 
       //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            //Add the data row.
            var questionLabel.val("")
            var row = $(tableRow[0].insertRow(-1));
  
        }
 
        var dvExcel = $("#dvExcel");
        dvExcel.html("");
        dvExcel.append(table);
    };


    ProcessExcel("QuestionData.xlsx"))
  }); 

class Question {

    constructor() {
                        
          

    }

}