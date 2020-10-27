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

        //Read the Excel File data.
    
 
              var reader = new FileReader();
          
              reader.readAsArrayBuffer({
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                  type: 'binary'
                });
          
                workbook.SheetNames.forEach(function(sheetName) {
                  // Here is your object
                  var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                  var json_object = JSON.stringify(XL_row_object);
                  console.log(json_object);
          
                })
          
              };
          
              reader.onerror = function(ex) {
                console.log(ex);
              };
          
              reader.readAsBinaryString(file);
            };
          };
          
        var workbook = XLSX.read(data, {type:"binary"});

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

        var headerRow = excelRows[0]
        //Add the data rows from Excel file.
        for (var i = 1; i < excelRows.length; i++) {


            //GET DATA FROM EXCEL ROW
            currentRow = excelRows[i];
            //get Question text
            questionLabel.text(currentRow[1])
            //add QuestionText to HTML ROW
            tableRow.append(questionLabel).append(inputBlock)

            $("#form1").append(tableRow)
        }

    };


    


$(document).ready(function () {
     
  
    var host = location.origin  
    var Url =  host + "/QuestionData.xlsx";
    var files;
    $.ajax({
        url:Url, 
        success: function (data) {
            files = data; 
            ProcessExcel(files)
        } 
    }); 
   
   

})