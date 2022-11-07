import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "HTTP://192.168.1.13:7777",
      // accounts: [privateKey1, privateKey2, ...]
    },
  },
};

export default config;
