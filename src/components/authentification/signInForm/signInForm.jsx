import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/authentification/userContext";

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

const SignInForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });

	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const { checkedEmail, login } = React.useContext(UserContext);

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleContinueClick = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const data = getValues();
		try {
			await checkedEmail(data);
			if (currentStep + 1 <= steps.length) {
				const isValidStep = trigger(steps[currentStep].fields);
				if (isValidStep) {
					setCurrentStep((prevStep) => prevStep + 1);
					setError("");
				}
			}
			setIsLoading(false);
		} catch (error) {
			setError(error?.response.data.message);
			setIsLoading(false);
		}
	};

	const transformData = (data) => {
		const transformedData = {
			email: data.email || "",
			password: data.motDePasse || "",
		};

		return transformedData;
	};

	const onSubmit = async (data) => {
		const resultTransformData = transformData(data);
		setIsLoading(true);
		try {
			await login(resultTransformData);
			setIsLoading(false);
			navigate("/");
		} catch (error) {
			setError(error?.response.data.message);
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="card" style={{ padding: "50px 30px" }}>
				<div className="contentTheme">
					<div className="bg-logo">
						<h1 className="logo">F</h1>
					</div>
					<p className="p-h2">Freelpay</p>
				</div>
				<p className="p-h1">Connexion</p>
				<p className="p-h3 text-center">Pour connecter, entrez votre email</p>
				{error && (
					<p
						className="p-label p-error"
						style={{ textAlign: "center", marginTop: "50px" }}>
						{error}
					</p>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					{steps[currentStep].fields.map((fieldName) => (
						<div key={fieldName}>
							<p className={`p-label ${errors[fieldName] ? "p-error" : ""}`}>
								{fieldName.replace(/([A-Z])/g, " $1").trim()}
							</p>
							<Controller
								name={fieldName}
								control={control}
								rules={{
									required: `Ce champ est requis`,
									...(fieldName === "email" && {
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Ce champ doit être une adresse e-mail valide",
										},
									}),
									...(fieldName.includes("motDePasse") && {
										minLength: 8,
										validate: isPasswordValid,
									}),
								}}
								render={({ field }) => (
									<>
										<input
											type={
												fieldName === "motDePasse"
													? "password"
													: fieldName === "dateDeNaissance"
													? "date"
													: "text"
											}
											className={`input ${
												errors[fieldName] ? "input-error" : ""
											}`}
											{...field}
										/>
										{errors[fieldName] && (
											<span className="p-error">
												{errors[fieldName].message}
											</span>
										)}
									</>
								)}
							/>
						</div>
					))}

					<button
						type="button"
						onClick={
							currentStep === steps.length - 1
								? handleSubmit(onSubmit)
								: handleContinueClick
						}
						className="btn-secondary">
						{isLoading ? (
							<>Chargment ...</>
						) : (
							<>
								{currentStep === steps.length - 1
									? "Se connecter"
									: "Continuer"}
							</>
						)}
					</button>
					<button type="button" className="btn-primary" onClick={handleBack}>
						Retour
					</button>
					<p className="p-h3 text-center">
						Pas inscrit ?{" "}
						<span className="p-a" onClick={(e) => navigate("/signup")}>
							Inscription
						</span>
					</p>
				</form>
			</div>
		</>
	);
};
export default SignInForm;
