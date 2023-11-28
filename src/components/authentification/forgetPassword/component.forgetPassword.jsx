import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "../../../hooks/useSearchParams";
import { useNavigate } from "react-router-dom";

const steps = [
	{
		label: "Étape 1",
		fields: ["Email"],
	},
	{
		label: "Étape 2",
		fields: ["CodeDeVérification"],
	},
	{
		label: "Étape 3",
		fields: ["nouveauMotDePasse", "confirmationDeMotDePasse"],
	},
];

const ComponentForgetPassword = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });

	const navigate = useNavigate();
	const email = useSearchParams("e");
	const [currentStep, setCurrentStep] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);
	const [haveErrorSubmit, setHaveErrorSubmit] = React.useState(false);
	const [error, setError] = React.useState("");

	const isPasswordMatch = (value) => {
		const passwordValue = getValues("nouveauMotDePasse");
		return value === passwordValue || "Les mots de passe ne correspondent pas";
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		} else {
			navigate("/");
		}
	};
	const handleContinueClick = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const data = getValues();
		try {
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

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const onSubmit = () => {
		// Ajoutez ici la logique pour le mode de passe oublié
	};

	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="contentTheme">
				<div className="bg-logo" onClick={() => navigate("/signup")}>
					<h1 className="logo">F</h1>
				</div>
				<p className="p-h2">Freelpay</p>
			</div>
			<p className="p-h1">Récupération du compte</p>
			<p className="p-h3 text-center">
				Pour continuer, entrez l'adresse email à récupérer{" "}
			</p>
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
						<p className={`${errors[fieldName] ? "p-error" : ""}`}>
							{fieldName !== "motDePasse" ? (
								<p className="p-label">
									{fieldName.replace(/([A-Z])/g, " $1").trim()}
								</p>
							) : (
								<>
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											height: "13px",
										}}>
										<p className="p-label">
											{fieldName.replace(/([A-Z])/g, " $1").trim()}
										</p>
										<p className="p-a p-label" onClick={onForgetPassword}>
											Mode de passe oubliée ?
										</p>
									</div>
								</>
							)}
						</p>
						<Controller
							name={fieldName}
							control={control}
							rules={{
								required: `Ce champ est requis`,
								minLength: 8,
								validate: isPasswordValid,
								...(fieldName === "confirmationDeMotDePasse" && {
									validate: isPasswordMatch,
								}),
							}}
							render={({ field }) => (
								<>
									<input
										type="password"
										className={`input ${
											errors[fieldName] ? "input-error" : ""
										}`}
										{...field}
									/>
									{errors[fieldName] && (
										<span className="p-error">{errors[fieldName].message}</span>
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
								: currentStep === steps.length - 3
								? "Réinitialiser le mot de passe"
								: "Valider"}
						</>
					)}
				</button>
				<button className=" no-border btn-primary" onClick={handleBack}>
					Retour
				</button>
			</form>
		</div>
	);
};

export default ComponentForgetPassword;
