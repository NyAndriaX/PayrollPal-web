import React from "react";
import { routes } from "./routes";
import { useLocation } from "react-router-dom";
import { useUserData } from "../context/authentification/userContext";

const AlwaysCalledRoutes = () => {
	const location = useLocation();
	const { data } = useUserData();
	const user = data.infosUsers;
	const isLoggedIn = user !== null;
	const isAuthPage = routes.find(
		(route) => route.path === location.pathname
	)?.isAuthPage;

	if (isLoggedIn && isAuthPage) {
		window.location = "/";
	}

	return null;
};

export default AlwaysCalledRoutes;
