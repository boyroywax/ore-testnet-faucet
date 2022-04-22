import React, { useContext, useState }from "react";
import { AppContext } from "../AppProvider";

import { wax } from "../helpers/wax";


export const WaxLoggedIn: React.FC = () => {

	const { waxUser, setWaxUser } = useContext(AppContext)

	const onWaxLogout = () => {
		setWaxUser("LoggedOut")
	}

	return (
		<>
			Wax Username: {waxUser}
			<br />
			<button
				onClick={() => {
					onWaxLogout();
				}}
			>
				Logout
			</button>
			<br />
			<br />
		</>
	);
};
