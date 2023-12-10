var ss = SpreadsheetApp.openByUrl("YOUR_SPREADSHEET_URL");
var sheet = ss.getSheetByName("daily_attendance");

function doGet(e){
  var action  = e.parameter.action;
  
  if(action == "in")
    return inTime(e);
   
  if(action == "out")
    return outTime(e);
  
}


function doPost(e){
  var action  = e.parameter.action;
  
  if(action == "in")
    return inTime(e);
   
  if(action == "out")
    return outTime(e);
  
}

function inTime(e){
  var id = e.parameter.id;
  var values = sheet.getRange(2,1,sheet.getLastRow(),1).getValues();
  
  for(var i = 0 ; i<values.length ; i++){
    if(values[i][0] == id){
      i=i+2;
      var in_time = Utilities.formatDate(new Date(), "IST", "HH:mm:ss");
      sheet.getRange(i,3).setValue(in_time);
      return ContentService.createTextOutput("Thank You ! Your In Time is "+in_time).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  return ContentService.createTextOutput("Id Not Found").setMimeType(ContentService.MimeType.TEXT);
}


function outTime(e){
  var id = e.parameter.id;
var values = sheet.getRange(2,1,sheet.getLastRow(),1).getValues();
  
  for(var i = 0 ; i<values.length ; i++){
    if(values[i][0] == id){
      i=i+2;
      var out_time = Utilities.formatDate(new Date(), "IST", "HH:mm:ss");
      sheet.getRange(i,4).setValue(out_time);
      return ContentService.createTextOutput("Thank You ! Your Out Time is "+out_time).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  return ContentService.createTextOutput("Id Not Found").setMimeType(ContentService.MimeType.TEXT);
}
