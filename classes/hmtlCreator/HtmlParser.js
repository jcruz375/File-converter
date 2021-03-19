const ejs = require('ejs');

class HtmlParser {
  static async Parse(table){
    return await ejs.renderFile('C:/Users/Suporte10/Desktop/Estudos/formacao_node/Projects/file_converter/classes/hmtlCreator/table.ejs', {header: table.header,rows: table.rows});
  };
};

module.exports = HtmlParser;