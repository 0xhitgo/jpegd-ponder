import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "mainnet", chainId: 1, rpcUrl: process.env.PONDER_RPC_URL_1 },
  ],
  contracts: [
    {
      name: "LPFarming",
      network: "mainnet",
      abi: "./abis/LPFarming.json",
      address: "0xb271d2c9e693dde033d97f8a3c9911781329e4ca",
      startBlock: 14743750,
    },
  ],
};
