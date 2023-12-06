import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../../../context/authentification/userContext";
import LoadingCercleGif from "../../../assets/loading-cercle-dots.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ERROR_MESSAGES = {
	REQUIRED: "Ce champ est requis",
	EMAIL_PATTERN: "Ce champ doit être une adresse e-mail valide",
	PASSWORD_VALIDATION: "Le mot de passe doit contenir au moins un chiffre",
	GENERIC: "Une erreur s'est produite",
};

const steps = [
	{
		label: "Étape 1",
		fields: ["email"],
	},
	{
		label: "Étape 2",
		fields: ["motDePasse"],
	},
];

const SigninForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
		setValue,
	} = useForm({ mode: "onChange" });

	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { existenceEmail, login } = useContext(UserContext);
	const [showPassword, setShowPassword] = useState(false);

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const renderFormField = (fieldName) => (
		<div key={fieldName}>
			<p className={` p-label ${errors[fieldName] ? "p-error" : ""}`}>
				{fieldName.replace(/([A-Z])/g, " $1").trim()}
			</p>
			<div className="input-container">
				<Controller
					name={fieldName}
					control={control}
					rules={{
						required: ERROR_MESSAGES.REQUIRED,
						...(fieldName === "email" && {
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: ERROR_MESSAGES.EMAIL_PATTERN,
							},
						}),
						...(fieldName.includes("motDePasse") && {
							minLength: {
								value: 8,
								message: "Le mot de passe doit avoir au moins 8 caractères",
							},
							validate: isPasswordValid,
						}),
					}}
					render={({ field }) => (
						<div className="input-wrapper">
							<input
								type={
									fieldName === "motDePasse" && !showPassword
										? "password"
										: "text"
								}
								className={`input ${errors[fieldName] ? "input-error" : ""}`}
								{...field}
							/>
							{fieldName === "motDePasse" && (
								<FontAwesomeIcon
									icon={showPassword ? faEyeSlash : faEye}
									className="password-toggle-icon"
									onClick={() => {
										setShowPassword(!showPassword);
									}}
								/>
							)}
						</div>
					)}
				/>
			</div>
			{errors[fieldName] && (
				<span className="p-error">{errors[fieldName].message}</span>
			)}
		</div>
	);

	const handleContinue = async (e) => {
		e.preventDefault();
		const data = getValues();

		try {
			setIsLoading(true);
			const { email } = data;
			await existenceEmail(email);

			if (currentStep + 1 <= steps.length) {
				const isValidStep = await trigger(steps[currentStep].fields);

				if (isValidStep) {
					setCurrentStep((prevStep) => prevStep + 1);
					setError("");
				}
			}
		} catch (error) {
			setError(error?.response?.data?.message || ERROR_MESSAGES.GENERIC);
		} finally {
			setIsLoading(false);
		}
	};

	const transformData = (data) => ({
		email: data.email || "",
		password: data.motDePasse || "",
	});

	const onForgetPassword = () => {
		const { email } = getValues();
		const dataEmailEncoded = encodeURIComponent(JSON.stringify(email));
		navigate(`/signin/mot_de_passe_oubliee?e=${dataEmailEncoded}`);
	};

	const onSubmit = async (data) => {
		const resultTransformData = transformData(data);

		try {
			setIsLoading(true);
			await login(resultTransformData);
			navigate("/");
		} catch (error) {
			setError(error?.response?.data?.message || ERROR_MESSAGES.GENERIC);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="card" style={{ padding: "50px 30px" }}>
				<div className="contentTheme">
					<div className="bg-logo" onClick={() => navigate("/signup")}>
						<h1 className="logo">P</h1>
					</div>
					<p className="p-h2">Payrollpal</p>
				</div>
				<p className="p-h1">Connexion</p>
				<p className="p-h3 text-center">Pour connecter, entrez votre email</p>
				{error && (
					<p className="p-label p-error" style={{ textAlign: "center" }}>
						{error}
					</p>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					{steps[currentStep].fields.map(renderFormField)}

					<button
						type="button"
						onClick={
							currentStep === steps.length - 1
								? handleSubmit(onSubmit)
								: handleContinue
						}
						className="btn-secondary">
						{isLoading ? (
							<img src={LoadingCercleGif} alt="loading ..." width={40} />
						) : (
							<>
								{currentStep === steps.length - 1
									? "Se connecter"
									: "Continuer"}
							</>
						)}
					</button>
					{currentStep > 0 ? (
						<p className="p-h3 text-center">
							Mot de passe oubliée ?{" "}
							<span className="p-a" onClick={onForgetPassword}>
								Récupération
							</span>
						</p>
					) : (
						<p className="p-h3 text-center">
							Pas inscrit ?{" "}
							<span className="p-a" onClick={() => navigate("/signup")}>
								Inscription
							</span>
						</p>
					)}
				</form>
			</div>
		</>
	);
};

export default SigninForm;
