function getLideres() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Liderança');
    var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
    var lideres = data.map(function(row) {
        return row[0];
    });
    return ContentService.createTextOutput(JSON.stringify(lideres)).setMimeType(ContentService.MimeType.JSON);
}
