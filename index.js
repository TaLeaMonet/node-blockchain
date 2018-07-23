const createTransaction = requre('./src/transaction');
const createBlock = requre('./src/block');

const blockchain = {
    blocks: [],
};

// Genesis block
Blockchain.blocks.push({
      hash: "000000",
      index: 0,
      data: "",
      timestamp: Date.now(),
});
