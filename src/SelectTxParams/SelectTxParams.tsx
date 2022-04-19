import React from "react";

interface Props {
	amount: string
	setAmount: (amount: string) => void
	toAddress: string
	setToAddress: (txAddress: string) => void
}

export const SelectTxParams: React.FC<Props> = ({ amount, setAmount, toAddress, setToAddress }) => {
	return (
		<div style={{ marginTop: 10, marginBottom: 20 }}>
			<h2>Transfer testnet funds from your wallet</h2>
			<div className="input-wrapper">
				<div>
					<h3>Amount</h3>
					<input 
						name="amount"
						onChange={(e) => {
							e.preventDefault();
							setAmount(e.target.value);
						}} id={amount}></input>
				</div>
				<div>
					<h3>Recipient</h3>
					<input 
						name="toAddress"
						onChange={(e) => {
							e.preventDefault();
							setToAddress(e.target.value);
						}} id={toAddress}></input>
				</div>
			</div>
		</div>
	);
};
