import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ganache: {
      url: "HTTP://192.168.1.13:7777",
      // accounts: [privateKey1, privateKey2, ...]
    },
    hhnode: {
      url: "http://127.0.0.1:8545/",
    },
  },
};

export default config;
