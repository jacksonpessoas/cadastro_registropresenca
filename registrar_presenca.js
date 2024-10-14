function registrarPresenca(e) {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Presencas');
    sheet.appendRow([data.nome, new Date()]);
    
    return ContentService.createTextOutput('Presença registrada com sucesso!');
}
