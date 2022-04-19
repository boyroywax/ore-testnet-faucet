import React from "react";
import { useState, createContext} from "react";

export const AppContext = createContext<{
	errors: string | undefined;
	setErrors: (errors: string | undefined) => void;
	oreIdResult: string | undefined;
	setOreIdResult: (oreIdResult: string | undefined) => void;
	balance: string | undefined
	setBalance: (balance: string | undefined) => void
}>({
	errors: undefined,
	setErrors: () => undefined,
	oreIdResult: undefined,
	setOreIdResult: () => undefined,
	balance: undefined,
	setBalance: () => undefined
})

interface Props {}
export const AppProvider: React.FC<Props> = ({ children }) => {
	const [ errors, setErrors ] = useState<string | undefined>(undefined);
	const [ oreIdResult, setOreIdResult ] = useState<string | undefined>(undefined);
	const [ balance, setBalance ] = useState<string | undefined>(undefined);

	return (
		<AppContext.Provider
			value={{
				errors,
				setErrors,
				oreIdResult,
				setOreIdResult,
				balance,
				setBalance
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
