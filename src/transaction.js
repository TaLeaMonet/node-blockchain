function createTransaction(data) {
    var tr = {
      data,
        timestamp: Date.now(),
    };

    tr.hash = SHA256(`
        ${JSON.stringify(tr.data)};
        ${tr.timestamp}
      `);

      return tr; 
}
