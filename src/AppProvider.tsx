import React from "react";
import { useState, createContext} from "react";

export const AppContext = createContext<{
	errors: string | undefined;
	setErrors: (errors: string | undefined) => void;
	oreIdResult: string | undefined;
	setOreIdResult: (oreIdResult: string | undefined) => void;
	waxUser: string | undefined
	setWaxUser: (waxUser: string | undefined) => void
}>({
	errors: undefined,
	setErrors: () => undefined,
	oreIdResult: undefined,
	setOreIdResult: () => undefined,
	waxUser: undefined,
	setWaxUser: () => undefined,
})

interface Props {}
export const AppProvider: React.FC<Props> = ({ children }) => {
	const [errors, setErrors] = useState<string | undefined>(undefined);
	const [oreIdResult, setOreIdResult] = useState<string | undefined>(undefined);
	const [waxUser, setWaxUser] = useState<string | undefined>(undefined)

	return (
		<AppContext.Provider
			value={{
				errors,
				setErrors,
				oreIdResult,
				setOreIdResult,
				waxUser,
				setWaxUser
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
