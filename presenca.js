function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var sheet;
    
    if (data.funcao === 'colaborador') {
        sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Colaboradores');
        sheet.appendRow([data.nome, data.lider, data.endereco, data.contato, data.rg, data.cpf, data.titulo, data.zona, data.secao]);
    } else if (data.funcao === 'lider') {
        sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Liderança');
        sheet.appendRow([data.nome, data.endereco, data.contato, data.rg, data.cpf, data.titulo, data.zona, data.secao]);
    }
    
    return ContentService.createTextOutput('Cadastro realizado com sucesso!');
}
