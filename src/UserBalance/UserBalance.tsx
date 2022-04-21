// import { ChainType } from "@open-rights-exchange/chainjs";
import { toEosEntityName } from "@open-rights-exchange/chainjs/dist/chains/eos_2/helpers";
import { ChainEntityName } from "@open-rights-exchange/chainjs/dist/models";
import { useUser } from "oreid-react";
import React, { useState, useEffect } from "react";
import { getOreBalance } from "../helpers/eos";
// import { AppContext } from "../AppProvider";

import { OreConnection } from "../helpers/ore";


export const UserBalance: React.FC = () => {
	const user = useUser();
	const [ balance, setBalance ] = useState("")
	// const componentIsMounted = useRef(true);

	let accountName: string = toEosEntityName('None')
	// if (!user) return null;

	if (user) {
		accountName = user.accountName
	}

	// const fetchData = async () => {
	// 	try {
	// 		let connection = new OreConnection()
	// 		connection.getBalance( accountName ).then((balanceTotal) => {
	// 			setBalance(balanceTotal)
	// 		})
	// 		// return await makeConnection(accountName)
	// 	}
	// 	catch (err) {
	// 		console.error(err)
	// 	}
	// }

	const fetchData = async () => {
		try {
			const userBalance = (await getOreBalance(accountName))
			console.log(userBalance)
			setBalance( userBalance[0] )
		}
		catch (error) {
			console.error(error)
		}
	}


	useEffect(() =>  {
		fetchData()
	})

	if (!balance) {
		return <>Loading...</>
	}


	return (
		<>
			<h2>User Balance</h2>
			OreId account: {accountName}
			<br />
			Balance: {balance}
			<br />
			<button onClick={() => fetchData()}>Update balance</button>
			<br />
			{/* Pending Balance: {pendingBalance} */}
		</>
	);
};
