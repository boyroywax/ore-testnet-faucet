import React, { useContext } from "react"
import { AppContext } from "../AppProvider"

import { WaxLoggedIn } from '../WaxLoggedIn'
import { WaxLoggedOut } from '../WaxLoggedOut'


export const WaxConnect: React.FC = () => {

    const { waxUser } = useContext(AppContext)

    const isWaxConnected = ():boolean  => {
        let waxConnected = false

        if ((waxUser !== "LoggedOut") && (waxUser)) {
            waxConnected = true
        }

        return waxConnected
    }

    const isConnected = isWaxConnected()

    return (
        <>
        <h2>WAX Cloud Wallet</h2>
            {isConnected ? <WaxLoggedIn /> : <WaxLoggedOut />}
        </>
    )
}