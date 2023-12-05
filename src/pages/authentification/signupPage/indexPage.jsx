import { Routes, Route, Navigate } from "react-router-dom";
import UserChoicePage from "../userChoicePage/userChoice.page.jsx";
import SignUpWithCompany from "./company/signupWithCompany";
import SignUpWithFreelance from "./freelance/signupWithFreelance";

const SignUpPage = () => {
	return (
		<div className="components">
			<Routes>
				<Route path="/" element={<UserChoicePage />} />
				<Route path="company" element={<SignUpWithCompany />} />
				<Route path="freelance" element={<SignUpWithFreelance />} />
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</div>
	);
};

export default SignUpPage;
