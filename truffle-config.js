const path = require("path");

module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200  
        }
      }
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // match any network
      websockets: true,
      gas: 3000000,
      from: "0xE66ca724b7064667C8B7783a92E4043A4E3889D2",
      
    }
  },
  test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // match any network
      websockets: true,
      gas: 3000000,
      from: "0xE66ca724b7064667C8B7783a92E4043A4E3889D2"
      
    }
  
};
