
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







class Question {

    
 
    constructor(querytxt = "[Text goes here]", title = [""], itemType ) {
        this.Question = querytxt;
        this.Title = title;
        this.ItemType = itemType;
    }

}