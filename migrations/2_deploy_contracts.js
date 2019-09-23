var EIP20 = artifacts.require("EIP20");

module.exports = function(deployer) {
  deployer.deploy(EIP20);
};