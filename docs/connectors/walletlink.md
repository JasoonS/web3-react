# `web3-react` Documentation - WalletLink

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install

`yarn add @jasoons/walletlink-connector`

## Arguments

```typescript
url: string
appName: string
appLogoUrl?: string
```

## Example

```javascript
import { WalletLinkConnector } from '@jasoons/walletlink-connector'

const walletlink = new WalletLinkConnector({ url: '...', appName: '...' })
```

Note: Once the connector has been activated, the WalletLink SDK instance can be accessed under the `.walletLink` property.
