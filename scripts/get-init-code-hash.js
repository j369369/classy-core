const UniswapV2Pair = artifacts.require("ClassySwapPair.sol");
module.exports = async (callback) => {
  console.log(
    "ClassySwapPair bytecode hash (Look for INIT_CODE_HASH):\n%s",
    web3.utils.keccak256(UniswapV2Pair.bytecode).substring(2)
  );
  callback();
};
