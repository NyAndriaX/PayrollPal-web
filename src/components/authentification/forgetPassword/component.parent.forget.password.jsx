import React, { useState, useEffect } from "react";
import { steps } from "./utils";
import { useUserData } from "../../../context/authentification/userContext";
import { useNavigate } from "react-router-dom";
import ComponentForgetPassword from "./component.forget.password";

const ComponentParentForgetPassword = () => {
	const navigate = useNavigate();
	const [errorRequest, setErrorRequest] = React.useState(false);
	const { generateAndSendResetToken } = useUserData();
	const [isLoadingWithThisEmail, setIsLoadingWithThisEmail] =
		React.useState(false);
	const [currentStep, setCurrentStep] = useState(() => {
		const storedStep = sessionStorage.getItem("currentStep");
		return storedStep ? parseInt(storedStep, 10) : 0;
	});
	const [form, setForm] = useState(() => {
		const savedFormData = sessionStorage.getItem("formData");
		return savedFormData
			? JSON.parse(savedFormData)
			: { email: "", token: "", newPassword: "" };
	});

	const handleContinueWithThisEmail = async ({ email }) => {
		try {
			setErrorRequest("");
			setIsLoadingWithThisEmail(true);
			await generateAndSendResetToken(email);
			setForm((prevForm) => ({
				...prevForm,
				email: email,
			}));
			setCurrentStep((prev) => {
				const nextStep = prev + 2;
				sessionStorage.setItem("currentStep", nextStep.toString());
				return nextStep;
			});
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoadingWithThisEmail(false);
		}
	};
	useEffect(() => {
		sessionStorage.setItem("formData", JSON.stringify(form));
	}, [form]);

	const handleOtherEmail = async () => {
		try {
			setErrorRequest("");
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.delete("e");
			const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
			setCurrentStep((prev) => {
				const nextStep = prev + 1;
				sessionStorage.setItem("currentStep", nextStep.toString());
				return nextStep;
			});
			navigate(newUrl);
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		}
	};
	const nexStep = () => {
		setErrorRequest("");
		setCurrentStep((prev) => {
			const nextStep = prev + 1;
			sessionStorage.setItem("currentStep", nextStep.toString());
			return nextStep;
		});
	};

	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="contentTheme">
				<div className="bg-logo" onClick={() => navigate("/signup")}>
					<h1 className="logo">P</h1>
				</div>
				<p className="p-h2">Payrollpal</p>
			</div>
			<ComponentForgetPassword
				form={form}
				setForm={setForm}
				nexStep={nexStep}
				errorRequest={errorRequest}
				isLoadingWithThisEmail={isLoadingWithThisEmail}
				handleOtherEmail={handleOtherEmail}
				handleContinueWithThisEmail={handleContinueWithThisEmail}
				steps={steps[currentStep]}
			/>
		</div>
	);
};

export default ComponentParentForgetPassword;
