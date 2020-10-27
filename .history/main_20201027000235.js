//////////////////////////////////////////////////////////////Question Data
var questionsArray = [{
    "QID": "Pro/1.01",
    "Standard": "Create a project charter, with minimum data per the Project Charter Template",
    "Stage": "Propose"
}, {
    "QID": "Pro/1.02",
    "Standard": "If seed funding is required, submit the Project Charter with completed seed funding details to the appropriate governance forum for approval. Tier 1s see Project Stage Gate Checklist",
    "Stage": "Propose"
}, {
    "QID": "Pro/1.03",
    "Standard": "Architecture Spec - Vision completed and approved by technical governance bodies",
    "Stage": "Propose"
}, {
    "QID": "Pro/1.04",
    "Standard": "Define the change story and identify your stakeholders. Determine the high-level Change Management budget required",
    "Stage": "Propose"
}, {
    "QID": "Pro/2.01",
    "Standard": "Develop a Business Case for approval by internal and central governance, per Business Case – minimum data. Tier 1s use the Project Finance Evaluation Tool",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.02",
    "Standard": "Capture, prioritise and obtain approval of sufficient requirements to set the scope boundaries for the initiative, to enable forecasting and to inform the design process, per the SDLC Minimum Control Standards for Solution Requirements.",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.03",
    "Standard": "Document financial, non-financial and risk reduction benefits for inclusion in the Business Case.",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.04",
    "Standard": "Conduct an assessment of delivery risk (via RAID Register) and delivered risk (via Delivered Risk Traceability)",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.05",
    "Standard": "Document the risk profile (including owned and timebound mitigations) and integrated assurance approach in the Business Case",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.06",
    "Standard": "Architecture Spec - Blueprint completed and approved by technical governance bodies",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.07",
    "Standard": "Service Impact Assessment completed, with reference to the Service Introduction homepage",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.08",
    "Standard": "Global Privacy Impact Assessment completed and consultation with the Global Privacy Council, via the Group Privacy Officer.",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.09",
    "Standard": "Conduct an assessment against the Tiering Assessment Criteria to identify governance required",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.1",
    "Standard": "Understand and document the change strategy to ensure successful delivery against defined success measures",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.11",
    "Standard": "Secure by Design performed: The Cyber Security Risk Assessment",
    "Stage": "Discover"
}, {
    "QID": "Pro/2.11",
    "Standard": "Undergo the stage gate review associated with Business Case approval, Tier 1s see Project Stage Gate Checklist.",
    "Stage": "Discover"
}, {
    "QID": "Pro/3.01",
    "Standard": "Set-up a document repository to ensure documentation is stored centrally, maintained and available as evidence",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.02",
    "Standard": "Tier 1s create drawdown requests for incremental funding, per Funding Drawdown Request - minimum data. Note: Initiatives may be granted funding in stages with a 6 month maximum planned scope delivery",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.03",
    "Standard": "Create a refreshed Business Case when seeking materially changed funding (+10% to costs, -10% to financial benefits or risk reduction benefits no longer achievable).",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.04",
    "Standard": "Undergo the stage gate review associated with Funding Drawdown, Tier 1s see Project Stage Gate Checklist.",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.05",
    "Standard": "Engage functional areas and BAU recipients of project-initiated change to ensure business readiness, including Risk and Control owners to update RCSAs (Risk and Control Self-Assessments) and track through operating effectiveness",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.06",
    "Standard": "Detailed requirements to be captured, approved and traceable from high level requirements to testing completion, per the SDLC Minimum Control Standards for Solution Requirements.",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.07",
    "Standard": "Solution decision to be made based on an assessment of options with regard to their viability, maintainability and the requirements, per the SDLC Minimum Control Standards for Solution Decision and Assessment",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.08",
    "Standard": "Solution Architecture to be documented and submitted for review by the relevant Divisional or Global review forums as required, per the SDLC Minimum Control Standards for Solution Architecture and Design",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.09",
    "Standard": "Relevant solution components to be developed in accordance with detailed designs following development methods and documentation standards, and quality assurance (QA) and approval requirements, per the SDLC Minimum Control Standards for Solution Build",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.1",
    "Standard": "Test strategy/plan and requirements traceability to be captured; and testing and defect management to be performed, per the SDLC Minimum Control Standards for Test Strategy and Requirements Traceability; and Testing and Defect Management",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.11",
    "Standard": "Service Introduction Checklist completed prior to solution release, with reference to the Service Introduction homepage",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.12",
    "Standard": "An implementation plan, approved by the relevant stakeholders, to be followed, per the SDLC Minimum Control Standards for Implementation.",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.13",
    "Standard": "Deliver the Change Management Strategy. Future state plans are enacted for impacted areas",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.14",
    "Standard": "Communication / Training / and business readiness activities have been completed as planned. Remediation activity undertaken as necessary",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/3.15",
    "Standard": "Undergo the stage gate review associated with Solution Release, Tier 1s see Project Stage Gate Checklist",
    "Stage": "Design & Deliver"
}, {
    "QID": "Pro/4.01",
    "Standard": "End of Warranty Acceptance received from Sponsor",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/4.02",
    "Standard": "Handover the Benefits Register to benefit owners for tracking and reporting benefits realisation",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/4.03",
    "Standard": "Close out all temporary initiative related elements created to facilitate delivery",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/4.04",
    "Standard": "Business Owners engage Finance in the execution of the financial benefits realisation",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/4.05",
    "Standard": "Capture lessons learned, with minimum data per the Lessons Learned Template and conduct a Post Implementation Review. For IT delivery, per the SDLC Minimum Control Standards for Post Implementation Review",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/4.06",
    "Standard": "Develop a post implementation approach that allows business to embed and sustain the change",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/4.07",
    "Standard": "Undergo the stage gate review associated with Project Closure, Tier 1s see Project Stage Gate Checklist",
    "Stage": "Embed & Evolve"
}, {
    "QID": "Pro/5.01",
    "Standard": "Track and report on initiative progress as defined by reporting cycles, see Project Status Reporting – minimum data",
    "Stage": "Project Management"
}, {
    "QID": "Pro/5.02",
    "Standard": "Actively manage Risks, Assumptions, Issues and Dependencies, maintaining a register, with minimum data per the RAID Register Template",
    "Stage": "Project Management"
}, {
    "QID": "Pro/5.03",
    "Standard": "Develop, maintain and regularly report against an approved timeline, per the Agile Board/Project Schedule – minimum data",
    "Stage": "Project Management"
}, {
    "QID": "Pro/5.04",
    "Standard": "Impact of changes to be understood, tracked and approved, via a change control process, including the maintenance of a change register, per the Change Request Register – minimum data",
    "Stage": "Project Management"
}, {
    "QID": "Pro/5.05",
    "Standard": "Ensure adherence to the QBE Global Change Management Framework",
    "Stage": "Project Management"
}, {
    "QID": "Pro/6.01",
    "Standard": "Governance forums adhere to a Terms of Reference document, with minimum data per the Terms of Reference for Governance Forums Template",
    "Stage": "Project Governance"
}, {
    "QID": "Pro/6.02",
    "Standard": "Ensure Sponsors and Steering Committee members understand roles and responsibilities",
    "Stage": "Project Governance"
}, {
    "QID": "Pro/6.03",
    "Standard": "Ensure compliance to QBE policies and procedures, engaging with EPMO, Finance, Risk, Compliance, Regulatory, Legal and Data",
    "Stage": "Governance"
}, {
    "QID": "Pro/7.01",
    "Standard": "Maintain an up to date Financial tracker, available for review by Finance and PMOs, per Initiative Financial Tracker – minimum data",
    "Stage": "Financial / Benefits"
}, {
    "QID": "Pro/7.02",
    "Standard": "Follow month-end financial management and reporting processes",
    "Stage": "Financial / Benefits"
}, {
    "QID": "Pro/7.03",
    "Standard": "Develop, maintain and regularly report against the Benefits Register",
    "Stage": "Financial / Benefits"
}, {
    "QID": "Pro/7.04",
    "Standard": "Assess risk to benefits realisation. Any material change to estimated benefits (-10% to financial benefits, non-financial or risk reduction benefit not achievable) are subject to change control for approval by the governance forum that approved funding.",
    "Stage": "Financial / Benefits"
}]

var projectTypeArray = ["DPMO - EO", "DPMO - NAO", "DPMO - AUSPAC", "Group HR", "Group Finance", "GSSC"]

/////////////////End of preloaded Question Data section 

var answersCollection = {};
var currentTitle = [];

class Question {
    //holds question data for sumbit event. 

    isSkipped = "No";
    isSkippedReason = "None"
    Qanswer = "Yes";
    date_started = getDate()

    constructor(ID = null) {
        this.id = ID;
    }
};

function getDate() {
    //get Current Date and return a string in UK time format

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();
}

function getRow(row) {
    //return row by rownum data  as jquery obnject
    return $("table tr").find(`[data-rownum=${row}]`)
}

function processExcel(data) {
    //Read and process from ExcelSheet.xlsx. Must be in specific format : 2 sheets. All sheets first row must be headers. 1st sheet  must have headers "QID"  and "Standard" , for thier question ID and 
    // questions text columns respectively. 

    var workbook = XLSX.read(data, {
        type: "array"
    })
    //Read the Excel File data. 
    var firstSheet = workbook.SheetNames[0];
    var secondSheet = workbook.SheetNames[1];
    //Read all rows from First Sheet into a JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    //get header row for row collection
    var headerRow = excelRows[0]
    var table1 = $("<table />")
    //do this  for all excel rows
    for (var i = 1; i < excelRows.length; i++) {
        //create  instance of question class 
        var Qobject = new Question(i);
        //GET DATA FROM EXCEL ROW
        currentRow = excelRows[i];
        Object.keys(headerRow).forEach(function (key) {
            //set data from current question into object from each column found in header row
            Qobject[key] = currentRow[key]
        })
        var currID = Qobject.id
        answersCollection[currID] = Qobject;
        var tableRow = $(`<tr rowspan=2 data-rownum=${i} > </tr>`);
        var question_td = $(".questCol").clone(true, true);
        var inputCols_td = $(".inputCol").clone(true, true)

        //set html label of question row on page
        question_td.find(".questionLabel").html(i + ". " + Qobject.Standard)


        tableRow.append(question_td, inputCols_td)
        table1.append(tableRow)
    }

    //add  constructed table to form element  
    $("#form1").html(table1)

    //process second sheet
    var excelRows2 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[secondSheet]);
    var headerRow2 = excelRows2[0]

    var col = $("<option > </option>")


    //apply second sheet data to html elements and store in js arrays
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
            projectTypeArray.push(temp)
        }
    }
}

function checkSubmit() {
    //simple check if every visible text area .required has been filled out. if it is enable to the out 
    if ($("textarea .vis").val() == "" || $("textarea .vis").val() == " " || $(".required") == " " || $(".required") == "") {
        $("#submitbtn").addClass("disabled")
    } else {
        $("#submitbtn").removeClass("disabled")
    }
}


//Process in-line array questions  store in array in first section of this page
function processJSONQuestionsArray(Qcollection, tcollection) {
    var table1 = $("<table />")

    //first string value in array
    var tempheading = "Propose"

    //prev set to Null to trigger first heading
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
        //store Qobject by Curr ID 
        answersCollection[currID] = Qobject;
        //set row ID same as currID, thereby linking object 
        var tableRow = $(`<tr rowspan=2 data-rownum=${currID} > </tr>`);

        //Assuming array questions are ordered by their project type, check for the diff of temp and prev arrays. trigger when found and insert a new heading.  
        if (tempheading != prevtempheading) {
            table1.append(`<h1 id ="h${count}">${tempheading}</h1>`)
            //event trigerred so update previous heading  to current one
            prevtempheading = tempheading
        }
        //clone template html elements down to their children
        var question_td = $(".questCol").clone(true, true);
        var inputCols_td = $(".inputCol").clone(true, true)
        var altCol_td = $(".altCol").clone(true, true);

        //find label and add question txt to it 
        question_td.find(".questionLabel").html(Qobject.Standard)
        tableRow.append(question_td, inputCols_td, altCol_td)
        table1.append(tableRow)
        //change current temp to new temp heading 
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



////////////////////////////////////////////////////////////////////////////////////////////
//This section is for processing from excell . Comment out if using inline data 
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
////////////////////////////////////////////////////////////////////


$(document).ready(function () {
    // Generate questions and event handlers

    var checkboxes = document.getElementsByTagName('input');

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
            checkboxes[i].checked = false;
        }
    }

    $("tr .mainCheck").change(checkState)

    //Load array information for page( )
    processJSONQuestionsArray(questionsArray, projectTypeArray)


    // SUBMIT  function 
    $("form").submit(function (e) {

        //
        if ($("textarea .vis").val() == "" || $("textarea.vis").val() == " " || $("textarea.vis").val() == "" || ("textarea.vis").val() == " ") {
            confirm("Please complete provide additional information in the textarea underneath questions!").done()
            return console.log("Nope!");
        }
        var beforeTest = answersCollection;

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

        //post addresss
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


    $("textarea .vis").change(function (e) {
        //update  Qobject skipping reseason field to reflect current text area
        var Row = $(this).closest("tr")
        var rowID = Row.data(`rownum`);
        answersCollection[rowID]["isSkippedReason"] = $(this).val();

    });

    function checkState(e) {

        //CHECK STATE OF MAIN CHECK BOX     
        checkSubmit()
        //caputure  element specific data
        var Row = $(this).closest("tr")
        var labelElem = Row.find(".mainChoice")
        var rowID = Row.data(`rownum`);
        var currTxt = labelElem.html()
        var textArea = Row.find("textarea")
        var RowthirdCol = Row.find(".altCol input")
        //Trigger rules 
        if ($(this).is(":checked")) {
            labelElem.html("Yes")
            answersCollection[rowID]["Qanswer"] = "Yes"
            textArea.hide().removeClass("vis")
            RowthirdCol.hide()
        } else {
            labelElem.html("No")
            answersCollection[rowID]["Qanswer"] = "No"
            textArea.show().addClass("vis")
            RowthirdCol.show()
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
        var mCContainer = Row.find(".mainCheckContainer")
        var RowthirdCol = Row.find(".altCol input")

        if ($(this).is(" :checked")) {

            skiptextElemtxtArea.show()
            skiptextElemtxtArea.addClass("vis")
            answersCollection[rowID]["isSkipped"] = "Yes"
            answersCollection[rowID]["Qanswer"] = "Skipped"
            mCContainer.addClass("disabled")
            RowthirdCol.hide()

        } else {
            if (Row.find(".mainChoice").html() == "No") {
                RowthirdCol.show()
            } else {
                RowthirdCol.hide()
                skiptextElemtxtArea.hide()
            }
            answersCollection[rowID]["isSkipped"] = "No"
            mCContainer.removeClass("disabled")
        }
    })
})