import { useIsLoggedIn } from "oreid-react";
import React, { useContext } from "react";
import "./App.css";
import { AppContext } from "./AppProvider";
import { LoggedIn } from "./LoggedIn";
import { LoggedOut } from "./LoggedOut";
import { ShowResultResults } from "./ShowResultResults";
// import useUrlState from "@ahooksjs/use-url-state";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  // const [state, setState] = useUrlState({ txtype: "transfer", toaddress: "ore1xxxxxxxxx", amount: "0.0000"});
  const isLoggedIn = useIsLoggedIn();
  const { errors, oreIdResult } = useContext(AppContext);

  return (
    <>
	  <div>
		<header className="App-header">
      <h1>ORE Testnet Faucet</h1>
					{isLoggedIn ? <LoggedIn /> : <LoggedOut />}
					<ShowResultResults result={oreIdResult} />
					<ShowResultResults result={errors} error />
		</header>
	</div>
    </>
  );
};

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
