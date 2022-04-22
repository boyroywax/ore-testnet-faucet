import { useUser } from "oreid-react"
import React, { useState, useEffect } from "react"
import { getOreBalance } from "../helpers/eos"


export const UserBalance: React.FC = () => {
	const user = useUser();
	const [ balance, setBalance ] = useState("")

	let accountName: string = 'None'
	// if (!user) return null;

	if (user) {
		accountName = user.accountName
	}

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
