export const solidityVersion = ["0.8.24"];
export const networks = [
  `
  rskTestnet: {
    url: "https://rpc.testnet.rootstock.io/nkpnhbegA8FdZ2ySATpUdCVcSQxpPh-T",
    chainId: 31,
    gasPrice: 60000000,
    accounts: [deployerPrivateKey],
  }`,
  `
  rskMainnet: {
    url: "https://rpc.mainnet.rootstock.io/nkpnhbegA8FdZ2ySATpUdCVcSQxpPh-T",
    chainId: 30,
    gasPrice: 60000000,
    accounts: [deployerPrivateKey],
  }`,
];
