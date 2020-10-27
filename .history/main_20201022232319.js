
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
        var tablerrow = $("<tr/>");
        form.border = "1";
 
       //Add the header cells.
        var headerCell = $("<th />");
        headerCell.html("Id");
        row.append(headerCell);
 
        var headerCell = $("<th />");
        headerCell.html("Name");
        row.append(headerCell);
 
        var headerCell = $("<th />");
        headerCell.html("Country");
        row.append(headerCell);
 
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            //Add the data row.
            var row = $(form[0].insertRow(-1));
 
            //Add the data cells.
            var cell = $("<td />");
            cell.html(excelRows[i].Id);
            row.append(cell);
 
            cell = $("<td />");
            cell.html(excelRows[i].Name);
            row.append(cell);
 
            cell = $("<td />");
            cell.html(excelRows[i].Country);
            row.append(cell);
        }
 
        var dvExcel = $("#dvExcel");
        dvExcel.html("");
        dvExcel.append(table);
    };
  });

  ProcessExcel("/QuestionData.xlsx")
 
class Question {

    constructor() {
                        
          

    }

}