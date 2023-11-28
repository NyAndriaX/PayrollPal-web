import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
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

const SigninForm = () => {
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
	const { existenceEmail, login } = React.useContext(UserContext);

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const handleContinueClick = async (e) => {
		e.preventDefault();
		const data = getValues();
		try {
			setIsLoading(true);
			const { email } = data;
			await existenceEmail(email);
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
			setIsLoading(false);
			navigate("/");
		} catch (error) {
			setIsLoading(false);
			setError(error?.response.data.message);
		}
	};

	return (
		<>
			<div className="card" style={{ padding: "50px 30px" }}>
				<div className="contentTheme">
					<div className="bg-logo" onClick={() => navigate("/signup")}>
						<h1 className="logo">F</h1>
					</div>
					<p className="p-h2">Freelpay</p>
				</div>
				<p className="p-h1">Connexion</p>
				<p className="p-h3 text-center">Pour connecter, entrez votre email</p>
				{error && (
					<p className="p-label p-error" style={{ textAlign: "center" }}>
						{error}
					</p>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					{steps[currentStep].fields.map((fieldName) => (
						<div key={fieldName}>
							<p className={` p-label ${errors[fieldName] ? "p-error" : ""}`}>
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
							<>Chargement ...</>
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
							<span className="p-a" onClick={(e) => navigate("/signup")}>
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
