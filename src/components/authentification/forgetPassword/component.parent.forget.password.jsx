import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { steps } from "./utils";
import ComponentForgetPassword from "./component.forget.password";

const ComponentParentForgetPassword = () => {
	const navigate = useNavigate();
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

	const handleContinueWithThisEmail = () => {
		setCurrentStep((prev) => {
			const nextStep = prev + 2;
			sessionStorage.setItem("currentStep", nextStep.toString());
			return nextStep;
		});
	};
	useEffect(() => {
		sessionStorage.setItem("formData", JSON.stringify(form));
	}, [form]);

	useEffect(() => {
		return () => {
			if (!location.pathname.includes("/mot_de_passe_oubliee")) {
				sessionStorage.removeItem("currentStep");
				sessionStorage.removeItem("formData");
			}
		};
	}, [location]);

	const handleOtherEmail = async () => {
		try {
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
			console.log(error);
		}
	};
	const nexStep = () => {
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
					<h1 className="logo">F</h1>
				</div>
				<p className="p-h2">Freelpay</p>
			</div>
			<ComponentForgetPassword
				form={form}
				setForm={setForm}
				nexStep={nexStep}
				handleOtherEmail={handleOtherEmail}
				handleContinueWithThisEmail={handleContinueWithThisEmail}
				steps={steps[currentStep]}
			/>
		</div>
	);
};

export default ComponentParentForgetPassword;
