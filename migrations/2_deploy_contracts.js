var Aria = artifacts.require('./Aria.sol');

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Aria);
};
