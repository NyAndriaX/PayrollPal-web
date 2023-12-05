import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute, routes } from "./routes/routes";
import AlwaysCalledRoutes from "./routes/paramsRoutes";
import Loading from "./components/common/loading";
import { useUserData } from "./context/authentification/userContext";
import "./App.css";

function AppWrapper() {
	const { data } = useUserData();

	return data.isSecureContext ? (
		<Router>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={
							<>
								<AlwaysCalledRoutes />
								{route.isPrivate ? (
									<PrivateRoute element={route.element} />
								) : (
									route.element
								)}
							</>
						}
					/>
				))}
			</Routes>
		</Router>
	) : (
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Loading />
		</div>
	);
}

export default AppWrapper;
