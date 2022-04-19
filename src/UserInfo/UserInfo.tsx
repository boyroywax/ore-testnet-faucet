import { useUser } from "oreid-react";
import React from "react";

export const UserInfo: React.FC = () => {
	const user = useUser();
	if (!user) return null;

	const { email, name, picture, username } = user;

	return (
		<>
			<h2>User Info</h2>
			<img
				//@ts-ignore
				src={picture}
				style={{ width: 100, height: 100, paddingBottom: 30 }}
				alt={"user"}
			/>
			<br />
			name: {name}
			<br />
			username: {username}
			<br />
			email: {email}
		</>
	);
};
