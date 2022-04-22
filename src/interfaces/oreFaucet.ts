export interface Faucet {
    dripAmount: number
    lastDrip: Date
    totalDrips: number
    uptimeStart: Date
    usersLastDrip: Date
    drip(): Promise<void>
}

export interface OreAccount {
    account: string
    activePublicKey: string
    ownerPublicKey: string
}

export interface Treasury extends OreAccount {
    activePrivateKey: string
    ownerPrivateKey: string
    createAccount(): Promise<void>
    buyResources(): Promise<void>
    addRam(): Promise<void>
    addNet(): Promise<void>
    addCpu(): Promise<void>
}