require("@nomicfoundation/hardhat-toolbox");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    hardhat: {
      chainId: 11155111,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [privateKey],
    },
    // mainnet: {
    //   url: "https://polygon-rpc.com",
    //   accounts: [privateKey],
    // },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_TOKEN,
    },
  },
  solidity: "0.8.20",
};

/*
REF: https://github.com/pguso/angular-hardhat-starter-dapp/blob/main/tsconfig.json
*/
