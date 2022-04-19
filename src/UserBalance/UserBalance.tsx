// import { ChainType } from "@open-rights-exchange/chainjs";
import { toEosEntityName } from "@open-rights-exchange/chainjs/dist/chains/eos_2/helpers";
import { ChainEntityName } from "@open-rights-exchange/chainjs/dist/models";
import { useUser } from "oreid-react";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";

import { OreConnection } from "../helpers/ore";




export const UserBalance: React.FC = () => {
	const user = useUser();
	const { balance, setBalance } = useContext(AppContext)
	// const componentIsMounted = useRef(true);

	let accountName: ChainEntityName = toEosEntityName('None')
	// if (!user) return null;

	if (user) {
		accountName = toEosEntityName(user.accountName)
	}

	const fetchData = async () => {
		try {
			let connection = new OreConnection()
			const balanceTotal = await connection.getBalance( accountName )
			setBalance(balanceTotal)
		}
		catch (err) {
			console.error(err)
		}
	}


	useEffect(() =>  {
		fetchData()
	})


	return (
		<>
			<h2>User Balance</h2>
			OreId account: {accountName}
			<br />
			Balance: {balance}
			<button onClick={() => fetchData()}>Update balance</button>
			<br />
			{/* Pending Balance: {pendingBalance} */}
		</>
	);
};
