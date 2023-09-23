require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const SEPOLIA_HTTP_URL = process.env.SEPOLIA_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const MUMBAI_HTTP_URL = process.env.MUMBAI_HTTP_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.MUMBAI_HTTP_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
