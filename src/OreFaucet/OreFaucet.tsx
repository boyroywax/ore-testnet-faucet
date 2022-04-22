import { useUser } from "oreid-react"
import React, { useEffect, useState } from "react"

import { Faucet, Treasury } from "../interfaces/oreFaucet"
import { LogEntryInterface } from "../interfaces/logEntry"
import { getAccount, getActionHistory, getTransactionTableRows } from "../helpers/eos"
import { MongoClient } from "../helpers/mongo"
import { LogEntryModel } from "../models/LogModels"


export async function getUsersLatestDrip(accountName: string): Promise<Date> {
    let userRows = await getTransactionTableRows(accountName)
    console.log(userRows)
    return new Date()
}
export class OreFaucet implements Faucet, Treasury {
    account: string = process.env.TREASURY_OREID || 'None'
    activePublicKey: string = process.env.TREASURY_ACTIVE_PUB_KEY || 'None'
    activePrivateKey: string = process.env.TREASURY_ACTIVE_PRIV_KEY || 'None'
    ownerPublicKey: string = process.env.TREASURY_OWNER_PUB_KEY || 'None'
    ownerPrivateKey: string = process.env.TREASURY_OWNER_PRIV_KEY || 'None'

    dripAmount: number = Number(process.env.FAUCET_DRIP_AMOUNT) || 10
    lastDrip: Date
    totalDrips: number
    uptimeStart: Date
    usersLastDrip: Date

    constructor(
        totalDrips: number,
        lastDrip: Date,
        uptimeStart: Date,
        usersLastDrip: Date
        ) {
        this.totalDrips = totalDrips
        this.lastDrip = lastDrip
        this.uptimeStart = uptimeStart
        this.usersLastDrip = usersLastDrip
    }

    public async drip(): Promise<void> {
        //
    }

    public async createAccount(): Promise<void> {
        //
    }

    public async buyResources(): Promise<void> {
        //
    }

    public async addRam(): Promise<void> {
        //
    }

    public async addNet(): Promise<void> {
        //
    }

    public async addCpu(): Promise<void> {
        //
    }
}


export const OreFaucetView: React.FC = () => {
	const user = useUser();
	const [ usersLastDrip, setUsersLastDrip ] = useState("")

	let accountName: string = 'None'
	// if (!user) return null;

	if (user) {
		accountName = user.accountName
	}

    const fetchData = async (): Promise<void> => {
		try {
			const usersLastDrip = (await getUsersLatestDrip(process.env.REACT_APP_TREASURY_OREID || "ore1sq1xummk"))
			console.log(usersLastDrip)
			setUsersLastDrip( usersLastDrip.toString() )

            const userActionsHistory = await getActionHistory(accountName)
            console.log(userActionsHistory)

            const userAccount = await getAccount(accountName)
            console.log(userAccount)

            const entry: LogEntryInterface = new LogEntryModel({
                action: "Initialize",
                amount: 0.00,
                dateCreated: new Date(),
                status: "Starting"
            })

            // let mongo = new MongoClient()
            // await mongo.createLogEntry(entry)
		}
		catch (error) {
			console.error(error)
		}
	}

	useEffect(() =>  {
		fetchData()
	})

    return (
        <>
            <h2>Faucet</h2>
        </>
    )

}
