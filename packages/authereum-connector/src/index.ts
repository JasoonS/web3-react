import { ConnectorUpdate } from '@jasoons/types'
import { AbstractConnector } from '@jasoons/abstract-connector'

const chainIdToNetwork: { [network: number]: string } = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  42: 'kovan'
}

interface AuthereumConnectorArguments {
  chainId: number
  config?: any
}

export class AuthereumConnector extends AbstractConnector {
  private readonly chainId: number
  private readonly config: any

  public authereum: any

  constructor({ chainId, config = {} }: AuthereumConnectorArguments) {
    super({ supportedChainIds: [chainId] })

    this.chainId = chainId
    this.config = config
  }

  public async activate(): Promise<ConnectorUpdate> {
    if (!this.authereum) {
      const { default: Authereum } = await import('authereum')
      this.authereum = new Authereum({
        networkName: chainIdToNetwork[this.chainId],
        ...this.config
      })
    }

    await this.authereum
      .getProvider()
      .enable()
      .then((accounts: string[]): string => accounts[0])

    return { provider: this.authereum.getProvider() }
  }

  public async getProvider(): Promise<any> {
    return this.authereum.getProvider()
  }

  public async getChainId(): Promise<number | string> {
    return this.authereum.getNetworkId()
  }

  public async getAccount(): Promise<null | string> {
    return this.authereum.getAccountAddress()
  }

  public deactivate() {}

  public async close() {
    this.authereum.logout()
    this.emitDeactivate()
  }
}
