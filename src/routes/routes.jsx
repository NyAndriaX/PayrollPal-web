import React from "react";
import { Navigate } from "react-router-dom";
import SignInPage from "../pages/authentification/signInPage/signInPage.jsx";
import SignUpPage from "../pages/authentification/signUpPage/indexPage.jsx";
import ValidationEmailPage from "../pages/authentification/validationEmail/validationEmail.page.jsx";
import { useUserData } from "../context/authentification/userContext.jsx";
import HomeLayout from "../layout";

const routes = [
	{
		path: "/signup/confirmation_email",
		element: <ValidationEmailPage />,
		isAuthPage: true,
		isPrivate: false,
	},
	{
		path: "/signup/*",
		element: <SignUpPage />,
		isPrivate: false,
	},
	{
		path: "/login",
		element: <SignInPage />,
		isAuthPage: true,
		isPrivate: false,
	},
	{
		path: "/*",
		element: <HomeLayout />,
		isAuthPage: false,
		isPrivate: true,
	},
];

function PrivateRoute({ element }) {
	const { data } = useUserData();

	const isLoggedIn = data.infosUsers !== null;

	return isLoggedIn ? element : <Navigate to="/login" />;
}

export { routes, PrivateRoute };
