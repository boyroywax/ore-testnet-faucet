import { Chain, ChainFactory } from "@open-rights-exchange/chainjs"
import { toEosEntityName, toEosSymbol } from "@open-rights-exchange/chainjs/dist/chains/eos_2/helpers"
import { EosChainEndpoint } from "@open-rights-exchange/chainjs/dist/chains/eos_2/models"
import { ChainEntityName, ChainSettings, ChainSymbolBrand, ChainType } from "@open-rights-exchange/chainjs/dist/models"

import { connection } from '../interfaces/oreConnection'


const chainSymbol: ChainSymbolBrand = toEosSymbol("ORE")

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
    balance: string = "0.0000"

    constructor() {
        this.chain = new ChainFactory().create( this.chainType, this.chainEndpoints, this.chainSettings )
    }

    public async connect(): Promise<void> {
        await this.chain.connect()
    }

    public async getBalance( accountName: string ): Promise<string> {
        let balance: string = "0.0000"
        const account: ChainEntityName = toEosEntityName(accountName)
        try {
            const rawBalance = await this.connect().then( async () => { return await this.chain.fetchBalance( account, chainSymbol ) } )
            this.balance = rawBalance.balance
        }
        catch (err) {
            console.error(err)
        }
        return balance
    }
}
