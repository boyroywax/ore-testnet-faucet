import React, { useState }from "react";
import { useActionLogout, useUser } from "oreid-react";

import { OreFaucetView } from "../OreFaucet";
import { SelectTxParams } from "../SelectTxParams"
import { SignWithOreID } from "../SignWithOreID";
import { UserInfo } from "../UserInfo";
import { UserBalance } from "../UserBalance";
import { WaxConnect } from "../WaxConnect"


export const LoggedIn: React.FC = () => {
	const [ amount, setAmount ] = useState("amount")
	const [ toAddress, setToAddress ] = useState("toAddress")

	const onLogout = useActionLogout();
	const user = useUser();
	if (!user) return null;

	return (
		<div className="LoggedIn">
			<div style={{ marginTop: 50, marginLeft: 40 }}>
				<UserInfo />
				<br />
				<button
					onClick={() => {
						onLogout();
					}}
				>
					Logout
				</button>
				<br />
				<br />
				<UserBalance />
				<br />
				<OreFaucetView />
				<br />
				<SelectTxParams amount={amount} setAmount={setAmount} toAddress={toAddress} setToAddress={setToAddress} />
				<SignWithOreID amount={amount} toAddress={toAddress}/>
				<br />
				<br />
				<WaxConnect />
				<br />
				<br />

			</div>
		</div>
	);
};
