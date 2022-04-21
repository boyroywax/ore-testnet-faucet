import { JsonRpc } from "eosjs";


interface OreAccount {
    account: string
    activePublicKey: string
    ownerPublicKey: string
}

interface Treasury extends OreAccount {
    activePrivateKey: string
    ownerPrivateKey: string
    createAccount(): Promise<void>
    buyResources(): Promise<void>
    addRam(): Promise<void>
    addNet(): Promise<void>
    addCpu(): Promise<void>
}

export class OreTreasury implements Treasury {
    account: string = process.env.TREASURY_OREID || 'None'
    activePublicKey: string = process.env.TREASURY_ACTIVE_PUB_KEY || 'None'
    activePrivateKey: string = process.env.TREASURY_ACTIVE_PRIV_KEY || 'None'
    ownerPublicKey: string = process.env.TREASURY_OWNER_PUB_KEY || 'None'
    ownerPrivateKey: string = process.env.TREASURY_OWNER_PRIV_KEY || 'None'
}