import React, { useContext } from "react";
import { useActionSign, useOreId, useUser } from "oreid-react";
import LoginButton from "oreid-login-button";
import { AppContext } from "../AppProvider";
import { createTransferTransaction } from "../helpers/composeTransaction";
// import { MongoClient } from "../helpers/mongo";
// import { logHandler } from "../helpers/logHandler";

const oreChainType = 'ore_test'

interface Props {
	amount: string
	toAddress: string
}
export const SignWithOreID: React.FC<Props> = ({amount, toAddress}) => {
	const { setErrors, setOreIdResult } = useContext(AppContext);
	const userData = useUser();
	const onSign = useActionSign();
	const oreId = useOreId();

	if (!userData) return null;

	const handleSign = async () => {
		setErrors(undefined);
		
		// get first ore (e.g. ore_test) account in user's wallet
		const signingAccount = userData.chainAccounts.find(
			(ca) => ca.chainNetwork === oreChainType
		)

		if (!signingAccount) {
			setErrors(
				`User doesn not have any accounts on ${oreChainType}`
			)
			return
		}

		const transactionBody = await createTransferTransaction(
			signingAccount.chainAccount,
			toAddress,
			amount
		)

		if (!transactionBody) {
			setErrors("Transaction cannot be created")
			return
		}

		console.log("transactionBody:", transactionBody)

		const transaction = await oreId.createTransaction({
			chainAccount: signingAccount.chainAccount,
			chainNetwork: signingAccount.chainNetwork,
			//@ts-ignore
			transaction: transactionBody,
			signOptions: {
				broadcast: true,
				returnSignedTransaction: false,
			},
		})

		onSign({
			transaction,
			onError: ({ errors }) => {
				setErrors(errors);
			},
			onSuccess: ({ data }) => {
				setOreIdResult(JSON.stringify(data, null, "\t"));
			},
		})
	}

	return (
		<div className="App-button">
			<LoginButton
				provider="oreid"
				text="Send"
				onClick={() => handleSign()}
			/>
		</div>
	)
}
