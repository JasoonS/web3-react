import { InjectedConnector } from '@jasoons/injected-connector'
import { NetworkConnector } from '@jasoons/network-connector'
import { WalletConnectConnector } from '@jasoons/walletconnect-connector'
import { WalletLinkConnector } from '@jasoons/walletlink-connector'
import { LedgerConnector } from '@jasoons/ledger-connector'
import { TrezorConnector } from '@jasoons/trezor-connector'
import { FrameConnector } from '@jasoons/frame-connector'
import { AuthereumConnector } from '@jasoons/authereum-connector'
import { FortmaticConnector } from '@jasoons/fortmatic-connector'
import { PortisConnector } from '@jasoons/portis-connector'
import { SquarelinkConnector } from '@jasoons/squarelink-connector'
import { TorusConnector } from '@jasoons/torus-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 1,
  pollingInterval: POLLING_INTERVAL
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'web3-react example'
})

export const ledger = new LedgerConnector({ chainId: 1, url: RPC_URLS[1], pollingInterval: POLLING_INTERVAL })

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234'
})

export const frame = new FrameConnector({ supportedChainIds: [1] })

export const authereum = new AuthereumConnector({ chainId: 42 })

export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1, 100] })

export const squarelink = new SquarelinkConnector({
  clientId: process.env.SQUARELINK_CLIENT_ID as string,
  networks: [1, 100]
})

export const torus = new TorusConnector({ chainId: 1 })
