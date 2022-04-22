import React, { useContext } from "react"
import { AppContext } from "../AppProvider"

import { wax } from "../helpers/wax"


export const WaxLoggedOut: React.FC = () => {
    const { setWaxUser } = useContext(AppContext)

    const waxLoginButton = async()=> {
        await wax.login().then((wax) => setWaxUser(wax))
    }

    return (
        <>
            <button
                onClick={() => {
                    waxLoginButton();
                }}
                >
                Login to WAX Cloud Wallet
            </button>
        </>
    )
}