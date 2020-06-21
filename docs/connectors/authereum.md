# `web3-react` Documentation - Authereum

- [Install](#install)
- [Connector Arguments](#connector-arguments)
- [Example](#example)

## Install

`yarn add @jasoons/authereum-connector`

## Connector Arguments

```typescript
chainId: number
```

## Example

```javascript
import { AuthereumConnector } from '@jasoons/authereum-connector'

const authereum = new AuthereumConnector({ chainId: 42 })
```

Note: Once the connector has been activated, the Authereum SDK instance can be accessed under the `.authereum` property.
