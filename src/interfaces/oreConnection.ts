import { Chain } from "@open-rights-exchange/chainjs"
import { EosChainEndpoint } from "@open-rights-exchange/chainjs/dist/chains/eos_2/models"
import { ChainSettings, ChainType } from "@open-rights-exchange/chainjs/dist/models"

export interface connection {
    chainType: ChainType
    chainSettings: ChainSettings
    chainEndpoints: EosChainEndpoint[]
    chain: Chain
    connect(): Promise<void>
}