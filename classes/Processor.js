class Processor {
  static process(data) {
    const splitRows = data.split('\r\n');
    let finalRows = [];

    splitRows.forEach(row => {
      const arr = row.split(',');
      finalRows.push(arr);
    });

    return finalRows;
  };
};

module.exports = Processor;