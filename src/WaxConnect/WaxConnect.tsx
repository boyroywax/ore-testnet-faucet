import React, { useContext } from "react"
import { AppContext } from "../AppProvider"

import { WaxLoggedIn } from '../WaxLoggedIn'
import { WaxLoggedOut } from '../WaxLoggedOut'


export const WaxConnect: React.FC = () => {

    const { waxUser } = useContext(AppContext)

    const isWaxConnected = ():boolean  => {
        let waxConnected = false
        console.log(waxUser)
        if ((waxUser !== "LoggedOut") && (waxUser)) {
            waxConnected = true
        }
        return waxConnected
    }

    const isConnected = isWaxConnected()

    return (
        <>
        <h3>WAX Cloud Wallet</h3>
            {isConnected ? <WaxLoggedIn /> : <WaxLoggedOut />}
        </>
    )
}