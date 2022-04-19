import { Chain, ChainFactory } from "@open-rights-exchange/chainjs"
import { EosChainEndpoint } from "@open-rights-exchange/chainjs/dist/chains/eos_2/models"
import { ChainSettings, ChainType } from "@open-rights-exchange/chainjs/dist/models"

import { connection } from '../interfaces/oreConnection'


const chainType: ChainType = ChainType.EosV2

const chainSetting: ChainSettings = {
    unusedAccountPublicKey: 'EOS5vf6mmk2oU6ae1PXTtnZD7ucKasA3rUEzXyi5xR7WkzX8emEma'
}

const oreTestNetEndpoint: EosChainEndpoint = {
    url: "https://ore-staging.openrights.exchange"
}

const oreTestNetEndpoint2: EosChainEndpoint = {
    url: "https://ore-staging2.openrights.exchange"
}

const oreTestNetEndpoints: EosChainEndpoint[] = [
    oreTestNetEndpoint,
    oreTestNetEndpoint2
]

export class OreConnection implements connection {
    chainType: ChainType = chainType
    chainSettings: ChainSettings = chainSetting
    chainEndpoints: EosChainEndpoint[] = oreTestNetEndpoints
    chain: Chain

    constructor() {
        this.chain = new ChainFactory().create( this.chainType, this.chainEndpoints, this.chainSettings )
    }

    public async connect(): Promise<void> {
        await this.chain.connect()
    }
}
