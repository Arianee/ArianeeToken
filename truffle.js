'use strict';

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: "0.5.1"
	  }
	}
};