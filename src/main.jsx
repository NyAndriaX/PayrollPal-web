import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UserProvider } from "./context/authentification/userContext.jsx";
import AppWrapper from "./App.jsx";
library.add(faBars);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<AppWrapper />
		</UserProvider>
	</React.StrictMode>
);
