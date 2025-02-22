# `web3-react` Documentation - Fortmatic

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install

`yarn add @jasoons/fortmatic-connector`

## Arguments

```typescript
apiKey: string
chainId: number
```

## Example

```javascript
import { FortmaticConnector } from '@jasoons/fortmatic-connector'

const fortmatic = new FortmaticConnector({ apiKey: '...', chainId: 4 })
```

Note: Once the connector has been activated, the Fortmatic SDK instance can be accessed under the `.fortmatic` property.
