import React, { useState }from "react";
import { SelectTxParams } from "../SelectTxParams"
import { useActionLogout, useUser } from "oreid-react";
import { SignWithOreID } from "../SignWithOreID";
import { UserInfo } from "../UserInfo";
import { UserBalance } from "../UserBalance";

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
				
				<br />
				<SelectTxParams amount={amount} setAmount={setAmount} toAddress={toAddress} setToAddress={setToAddress} />
				<SignWithOreID amount={amount} toAddress={toAddress}/>
				<br />

			</div>
		</div>
	);
};
