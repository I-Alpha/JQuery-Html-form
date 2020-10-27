
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
   
    function ExportToTable() {  
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;  
        /*Checks whether the file is a valid excel file*/  
        if (regex.test($("#excelfile").val().toLowerCase())) {  
            var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/  
            if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {  
                xlsxflag = true;  
            }  
            /*Checks whether the browser supports HTML5*/  
            if (typeof (FileReader) != "undefined") {  
                var reader = new FileReader();  
                reader.onload = function (e) {  
                    var data = e.target.result;  
                    /*Converts the excel data in to object*/  
                    if (xlsxflag) {  
                        var workbook = XLSX.read(data, { type: 'binary' });  
                    }  
                    else {  
                        var workbook = XLS.read(data, { type: 'binary' });  
                    }  
                    /*Gets all the sheetnames of excel in to a variable*/  
                    var sheet_name_list = workbook.SheetNames
     
                    var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/  
                  
                    sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/  
                       
                                 


                    });  
                    
                }  
                if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/  
                    reader.readAsArrayBuffer($("#excelfile")[0].files[0]);  
                }  
                else {  
                    reader.readAsBinaryString($("#excelfile")[0].files[0]);  
                }  
            }  
            else {  
                alert("Sorry! Your browser does not support HTML5!");  
            }  
        }  
        else {  
            alert("Please upload a valid Excel file!");  
        }  
    }  

class Question {

    constructor() {
                        
          

    }

}