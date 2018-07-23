function createBlock(data) {
  var block = {
      index: Blockchain.blocks.length,
      prevHash:
        Blockchain.blocks[Blockchain.blocks.length-1].hash,
        data,
        timestamp: Date.now(),
  };

  block.hash SHA256(`
      ${block.index}; ${block.prevHash};
      ${JSON.stringify(data)}; ${block.timestamp}
  `);
  return block;
}

module exports = createBlock
