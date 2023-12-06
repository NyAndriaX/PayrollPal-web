import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { steps, transformDataToFormData } from "./utils";
import SignupFormWidthFreelance from "./signupFormWithFreelance";
import { useUserData } from "../../../../context/authentification/userContext";

const SignupFormParent = () => {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);
	const [isLoading, setLoading] = React.useState(false);
	const { isEmailAvailable, signupFreelance } = useUserData();
	const [currentUnderStep, setCurrentUnderStep] = useState(0);
	const [errorRequest, setErrorRequest] = React.useState("");

	const onSubmit = async (data, dataCin) => {
		const { email } = data;
		const formData = transformDataToFormData(data, dataCin);
		try {
			setLoading(true);
			setErrorRequest("");
			await signupFreelance(formData);
			const dataEmailEncoded = encodeURIComponent(JSON.stringify(email));
			navigate(`/signup/confirmation_email?e=${dataEmailEncoded}`);
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setLoading(false);
		}
	};

	const handleBackSteps = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleContinueStepClick = async (email) => {
		try {
			if (currentStep <= 0) await isEmailAvailable(email);
			if (currentStep + 1 < steps.length) {
				setCurrentStep((prevStep) => prevStep + 1);
				setErrorRequest("");
				setCurrentUnderStep(0);
			}
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		}
	};

	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="contentTheme">
				<div className="bg-logo" onClick={() => navigate("/signup")}>
					<h1 className="logo">P</h1>
				</div>
				<p className="p-h2">Payrollpal</p>
			</div>
			<SignupFormWidthFreelance
				isLoading={isLoading}
				errorRequest={errorRequest}
				setErrorRequest={setErrorRequest}
				currentUnderStep={currentUnderStep}
				setCurrentUnderStep={setCurrentUnderStep}
				Length={steps.length}
				onSubmit={onSubmit}
				currentStep={currentStep}
				steps={steps[currentStep]}
				handleBackSteps={handleBackSteps}
				handleContinueStepClick={handleContinueStepClick}
			/>
		</div>
	);
};

export default SignupFormParent;
