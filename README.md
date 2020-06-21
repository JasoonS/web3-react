# `web3-react` 🧰

_A simple, maximally extensible, dependency minimized framework for building modern [Ethereum dApps](https://ethereum.org/beginners/)_

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Actions Status](https://github.com/NoahZinsmeister/web3-react/workflows/CI/badge.svg)](https://github.com/NoahZinsmeister/web3-react/actions)

| Packages                           | `@latest` Version                                                                                                                                                   | Size                                                                                                                                                                           | Description                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 🏠 **Core**                        |
| `@jasoons/core`                    | [![npm version](https://img.shields.io/npm/v/@jasoons/core/latest.svg)](https://www.npmjs.com/package/@jasoons/core/v/latest)                                       | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/core/latest.svg)](https://bundlephobia.com/result?p=@jasoons/core@latest)                                       | [React](https://reactjs.org/) Interface                                             |
| 🔌 **Connectors**                  |
| _Browser Extension/dApp Browser_   |
| `@jasoons/injected-connector`      | [![npm version](https://img.shields.io/npm/v/@jasoons/injected-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/injected-connector/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/injected-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/injected-connector@latest)           | [Injected](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md) Connector |
| _Remote API_                       |
| `@jasoons/network-connector`       | [![npm version](https://img.shields.io/npm/v/@jasoons/network-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/network-connector/v/latest)             | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/network-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/network-connector@latest)             | [RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) Connector                     |
| _QR Code_                          |
| `@jasoons/walletconnect-connector` | [![npm version](https://img.shields.io/npm/v/@jasoons/walletconnect-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/walletconnect-connector/v/latest) | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/walletconnect-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/walletconnect-connector@latest) | [WalletConnect](https://walletconnect.org/) Connector                               |
| `@jasoons/walletlink-connector`    | [![npm version](https://img.shields.io/npm/v/@jasoons/walletlink-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/walletlink-connector/v/latest)       | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/walletlink-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/walletlink-connector@latest)       | [WalletLink](https://www.walletlink.org/#/) Connector                               |
| _Hardware_                         |
| `@jasoons/ledger-connector`        | [![npm version](https://img.shields.io/npm/v/@jasoons/ledger-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/ledger-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/ledger-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/ledger-connector@latest)               | [Ledger](https://www.ledger.com/) Connector                                         |
| `@jasoons/trezor-connector`        | [![npm version](https://img.shields.io/npm/v/@jasoons/trezor-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/trezor-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/trezor-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/trezor-connector@latest)               | [Trezor](https://trezor.io/) Connector                                              |
| _Native_                           |
| `@jasoons/frame-connector`         | [![npm version](https://img.shields.io/npm/v/@jasoons/frame-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/frame-connector/v/latest)                 | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/frame-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/frame-connector@latest)                 | [Frame](https://frame.sh/) Connector                                                |
| _Hosted_                           |
| `@jasoons/authereum-connector`     | [![npm version](https://img.shields.io/npm/v/@jasoons/authereum-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/authereum-connector/v/latest)         | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/authereum-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/authereum-connector@latest)         | [Authereum](https://authereum.org/) Connector                                       |
| `@jasoons/fortmatic-connector`     | [![npm version](https://img.shields.io/npm/v/@jasoons/fortmatic-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/fortmatic-connector/v/latest)         | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/fortmatic-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/fortmatic-connector@latest)         | [Fortmatic](https://fortmatic.com/) Connector                                       |
| `@jasoons/portis-connector`        | [![npm version](https://img.shields.io/npm/v/@jasoons/portis-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/portis-connector/v/latest)               | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/portis-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/portis-connector@latest)               | [Portis](https://www.portis.io/) Connector                                          |
| `@jasoons/squarelink-connector`    | [![npm version](https://img.shields.io/npm/v/@jasoons/squarelink-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/squarelink-connector/v/latest)       | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/squarelink-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/squarelink-connector@latest)       | [Squarelink](https://squarelink.com/) Connector                                     |
| `@jasoons/torus-connector`         | [![npm version](https://img.shields.io/npm/v/@jasoons/torus-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/torus-connector/v/latest)                 | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/torus-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/torus-connector@latest)                 | [Torus](https://tor.us/) Connector                                                  |
| 🐉 **Low-Level**                   |
| `@jasoons/abstract-connector`      | [![npm version](https://img.shields.io/npm/v/@jasoons/abstract-connector/latest.svg)](https://www.npmjs.com/package/@jasoons/abstract-connector/v/latest)           | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/abstract-connector/latest.svg)](https://bundlephobia.com/result?p=@jasoons/abstract-connector@latest)           | Shared Connector Class                                                              |
| `@jasoons/types`                   | [![npm version](https://img.shields.io/npm/v/@jasoons/types/latest.svg)](https://www.npmjs.com/package/@jasoons/types/v/latest)                                     | [![minzip](https://img.shields.io/bundlephobia/minzip/@jasoons/types/latest.svg)](https://bundlephobia.com/result?p=@jasoons/types@latest)                                     | Shared [TypeScript](https://www.typescriptlang.org/) Types                          |

## Quickstart

[![Edit web3-react-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/NoahZinsmeister/web3-react/tree/v6/example?fontsize=14&hidenavigation=1&theme=dark)

## [Documentation](docs)

## Projects using `web3-react`

_Open a PR to add your project to the list!_

- [Uniswap.exchange](https://github.com/Uniswap/uniswap-frontend)
- [useWallet](https://github.com/aragon/use-wallet)
- [Terminal](https://blog.terminal.co/web3-react-integration/)
- [Everest](https://github.com/metacartel/everest-web-app)
- [NFT Scribe](https://github.com/conlan/nft-scribe)
- [Compound Liquidator](https://github.com/conlan/compound-liquidator)

## Related Efforts

- [Web3Modal](https://github.com/web3modal/web3modal)

## Local Development

- Clone repo\
  `git clone https://github.com/NoahZinsmeister/web3-react.git`

- Install top-level dependencies\
  `yarn`

- Install sub-dependencies\
  `yarn bootstrap`

- Build and watch for changes\
  `yarn start`
