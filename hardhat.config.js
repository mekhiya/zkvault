// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-dotenv")
require("@symblox/hardhat-dotenv")

const {API_URL_MUMBAI, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337
    },
     mumbai: {
       url: API_URL_MUMBAI,
       accounts: [`0x${PRIVATE_KEY}`]
     },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};
