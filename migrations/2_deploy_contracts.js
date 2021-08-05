const Factory = artifacts.require("ClassySwapFactory.sol");
// const Token1 = artifacts.require("Token1.sol");
// const Token2 = artifacts.require("Token2.sol");
// const DaiToken = artifacts.require("DaiToken.sol");
// const ClassyToken = artifacts.require("ClassyToken.sol");

module.exports = async function (deployer, network, addresses) {
  // await deployer.deploy(Factory, addresses[0]);
  await deployer.deploy(Factory, "0x3CD30Efab56841c95FC73943Fd45E18Aa4e36F20");
  const factory = await Factory.deployed();

  let token1Address, token2Address;
  if (network === "mainnet") {
    token1Address = "";
    token2Address = "";
  } else {
    // await deployer.deploy(Token1);
    // await deployer.deploy(Token2);
    // const token1 = await Token1.deployed();
    // const token2 = await Token2.deployed();
    // token1Address = token1.address;
    // token2Address = token2.address;
    // 1. 가짜 dai 토큰 생성 -> 메인넷에서는 필요치 않을듯?
    // await deployer.deploy(DaiToken);
    // const daiToken = await DaiToken.deployed();
    // 2. 사용할 토큰 생성 (클래시?)
    // await deployer.deploy(ClassyToken);
    // const clsyToken = await ClassyToken.deployed();
    // 4. 스테이킹시 이자를 farm에 입금해주기 -> 클래시를 줄것임
    // await clsyToken.transfer(farm.address, "1000000000000000000000000");
    // 5. 생성한 DAI 투자자 계좌로 전송해주기 -> 메인넷에서는 필요 X
    // await daiToken.transfer(accounts[1], "1000000000000000000000000");
  }
  console.log("INIT_CODE_HASH ==== ");
  console.log(factory.INIT_CODE_HASH);
  // await factory.createPair(token1Address, token2Address);
};
