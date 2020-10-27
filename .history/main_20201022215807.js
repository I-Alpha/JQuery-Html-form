
  title_ItemTypeDict = {"AUSPAC":"Portfilio",
    "BB UW&P":"Portfilio", 
    "EO", "Cyber":"Portfilio",
    "NA", "BB Claims":"Portfilio",
    "IT Transformation":"Portfilio",
    "Group":"Portfilio",
    "DPMO - EO":"Portfilio", 
    "DPMO - NAO", 
    "DPMO - AUSPAC", 
    "Group HR", 
    "Group Finance", 
    "GSSC	RISKsight", 
    "Insights", "Optimum", 
    "BB UW&P", "Majesco", "Cyber","BB Claims",
    "MtM", "FTP", "Strategic P ricing"}





class Question {

    this.dict = {"AUSPAC",
     "BB UW&P", 
     "EO", "Cyber",
     "NA", "BB Claims",
     "IT Transformation",
     "Group",
     "DPMO - EO", 
     "DPMO - NAO", 
     "DPMO - AUSPAC", 
     "Group HR", 
     "Group Finance", 
     "GSSC	RISKsight", 
     "Insights", "Optimum", 
     "BB UW&P", "Majesco", "Cyber","BB Claims",
     "MtM", "FTP", "Strategic P ricing"]
 
    constructor(querytxt = "[Text goes here]", title = [""], itemType) {
        this.Question = querytxt;
        this.Title = title;
        this.ItemType = itemType;
    }
}