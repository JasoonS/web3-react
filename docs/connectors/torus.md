# `web3-react` Documentation - Torus

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install

`yarn add @jasoons/torus-connector`

## Arguments

```typescript
chainId: number
initOptions?: any
constructorOptions?: any
```

## Example

```javascript
import { TorusConnector } from '@jasoons/torus-connector'

const torus = new TorusConnector({ chainId: 1 })
```

Note: Once the connector has been activated, the Torus SDK instance can be accessed under the `.torus` property.
