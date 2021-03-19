const Reader = require('./classes/Reader');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HtmlParser = require('./classes/hmtlCreator/HtmlParser');
const Writer = require('./classes/Writer');
const PdfWriter = require('./classes/PdfWriter');

const reader = new Reader();
const writer = new Writer()

async function main() {
  const data = await reader.Read('./users.csv');
  const processedData = Processor.process(data)

  const users = new Table(processedData);

  const html = await HtmlParser.Parse(users);

  writer.Write(`./htmlgen/${Date.now()}.html`, html);
  PdfWriter.WritePDF(`./pdfgen/${Date.now()}.PDF`, html)
};

main();