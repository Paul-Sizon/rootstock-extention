# 🏗 Rootstock Extension of Scaffold-ETH 2

This extension of Scaffold-ETH 2 is designed to support development on the Rootstock sidechain, a Bitcoin-powered smart contract platform. It provides the tools needed to build and deploy dApps on Rootstock. 

![screenshot](https://github.com/Paul-Sizon/rootstock-extention/blob/main/screenshot.png?raw=true)

## Installation

1. **Create a new project with the Rootstock extension:**

   ```bash
   npx create-eth@latest -e rootstock
    ```

## Building on Rootstock

- **Get API keys**: [Rootstock Dashboard](https://dashboard.rpc.rootstock.io/dashboard)
- **Developer resources**: [Rootstock Developer Portal](https://dev.rootstock.io/)
- **Learn about Runes**: [What are Runes?](https://www.youtube.com/embed/adkhsgEaXuQ?si=OknSz_y17LzBCi3m)

#

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Scaffold-ETH 2 Documentation</a> |
  <a href="https://scaffoldeth.io">Scaffold-ETH 2 Website</a>
</h4>

🧪 An open-source toolkit for building decentralized applications (dApps) on the Rootstock sidechain, extending the powerful features of Scaffold-ETH 2. This extension is tailored for developers looking to leverage Bitcoin's security with Rootstock's smart contract capabilities.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and TypeScript, with added support for the Rootstock network.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: A collection of React hooks wrapped around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts, with TypeScript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): A collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Rootstock and Ethereum networks.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2: Rootstock Extension, follow the steps below:

1. Install dependencies if it was skipped in CLI:

    ```bash
    cd my-dapp-example
    yarn install
    ```

2. Run a local network in the first terminal:

    ```bash
    yarn chain
    ```

    This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

    ```bash
    yarn deploy
    ```

    This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

    ```bash
    yarn start
    ```

    Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract tests with `yarn hardhat:test`.

- Edit your smart contract `RuneToken.sol` in `packages/hardhat/contracts`.
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts), check out the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`.

**Get API keys to deploy to production**
[Rootstock Dashboard](https://dashboard.rpc.rootstock.io/dashboard)