import React from "react";
import { Navigate } from "react-router-dom";
import SigninPage from "../pages/authentification/signinPage/signinPage.jsx";
import SignupPage from "../pages/authentification/signupPage/indexPage.jsx";
import ForgetPasswordPage from "../pages/authentification/forgetPassword/forgetPassword.page.jsx";
import ValidationEmailPage from "../pages/authentification/validationEmail/validationEmail.page.jsx";
import { useUserData } from "../context/authentification/userContext.jsx";
import HomeLayout from "../layout";

const routes = [
	{
		path: "/signin/mot_de_passe_oubliee",
		element: <ForgetPasswordPage />,
		isAuthPage: true,
		isPrivate: false,
	},
	{
		path: "/signup/confirmation_email",
		element: <ValidationEmailPage />,
		isAuthPage: true,
		isPrivate: false,
	},
	{
		path: "/signup/confirmation_email",
		element: <ValidationEmailPage />,
		isAuthPage: true,
		isPrivate: false,
	},
	{
		path: "/signup/*",
		element: <SignupPage />,
		isPrivate: false,
	},
	{
		path: "/login",
		element: <SigninPage />,
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
