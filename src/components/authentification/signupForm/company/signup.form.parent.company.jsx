import React from "react";
import { useNavigate } from "react-router-dom";
import { steps, transformData } from "./utils.jsx";
import SignupFormWithCompany from "./signupFormWithCompany.jsx";
import { useUserData } from "../../../../context/authentification/userContext";

const SignupFormParentCompany = () => {
	const navigate = useNavigate();
	const { signupCompany } = useUserData();
	const [isLoading, setIsLoading] = React.useState(false);
	const [currentStep, setCurrentStep] = React.useState(0);
	const [errorRequest, setErrorRequest] = React.useState("");
	const [currentUnderStep, setCurrentUnderStep] = React.useState(0);

	const handleContinueStepsClick = async () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep((prev) => prev + 1);
			setCurrentUnderStep(0);
			setErrorRequest("");
		}
	};

	const handleBackSteps = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const onSubmit = async (data) => {
		console.log(data);
		// const resultTransformData = transformData(data);
		// try {
		// 	setIsLoading(true);
		// 	await signupCompany(resultTransformData);
		// 	const dataEmailEncoded = encodeURIComponent(
		// 		JSON.stringify(resultTransformData.emailRepresentant)
		// 	);
		// 	navigate(`/signup/confirmation_email?e=${dataEmailEncoded}`);
		// 	setIsLoading(false);
		// } catch (error) {
		// 	setIsLoading(false);
		// 	setErrorRequest(error.response.data.error);
		// }
	};

	return (
		<div className="card">
			<div className="contentTheme">
				<div className="bg-logo" onClick={() => navigate("/signup")}>
					<h1 className="logo">F</h1>
				</div>
				<p className="p-h2">Freelpay</p>
			</div>
			<SignupFormWithCompany
				onSubmit={onSubmit}
				isLoading={isLoading}
				Length={steps.length}
				currentStep={currentStep}
				steps={steps[currentStep]}
				errorRequest={errorRequest}
				handleBackSteps={handleBackSteps}
				setCurrentStep={setCurrentStep}
				currentUnderStep={currentUnderStep}
				setCurrentUnderStep={setCurrentUnderStep}
				handleContinueStepsClick={handleContinueStepsClick}
			/>
		</div>
	);
};

export default SignupFormParentCompany;
