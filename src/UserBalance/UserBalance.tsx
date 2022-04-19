// import { ChainType } from "@open-rights-exchange/chainjs";
import { toEosEntityName, toEosSymbol } from "@open-rights-exchange/chainjs/dist/chains/eos_2/helpers";
import { ChainEntityName, ChainSymbolBrand } from "@open-rights-exchange/chainjs/dist/models";
import { useUser } from "oreid-react";
import React from "react";

import { OreConnection } from "../helpers/ore";


export const UserBalance: React.FC = () => {
	const user = useUser();
	if (!user) return null;

	const accountName: ChainEntityName = toEosEntityName(user.accountName)
	const chainType: ChainSymbolBrand = toEosSymbol("ORE")

	const balanceTotal1 = async () => {
		const connection = new OreConnection()
		await connection.connect()
		const balanceTotal = await connection.chain.fetchBalance( accountName, chainType )
	}

	return (
		<>
			<h2>User Balance</h2>
			OreId account: {accountName}
			<br />
			Balance: {balanceTotal1}
			<br />
			{/* Pending Balance: {pendingBalance} */}
		</>
	);
};
