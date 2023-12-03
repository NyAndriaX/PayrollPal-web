import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import LoadingCercleGif from "../../../../assets/loading-cercle-dots.gif";

const SignupFormWithCompany = ({
	steps,
	Length,
	onSubmit,
	isLoading,
	currentStep,
	errorRequest,
	handleBackSteps,
	currentUnderStep,
	setCurrentUnderStep,
	handleContinueStepsClick,
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });
	const navigate = useNavigate();

	const isPasswordMatch = (value) => {
		const passwordValue = getValues("motDePasse");
		return value === passwordValue || "Les mots de passe ne correspondent pas";
	};

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const handleBackUnderStep = async () => {
		setCurrentUnderStep((prevStep) => prevStep - 1);
	};

	const onBack = async () => {
		if (currentUnderStep > 0) {
			handleBackUnderStep();
		} else {
			handleBackSteps();
		}
	};

	const handleContinueUnderStepClick = async () => {
		setCurrentUnderStep((prevStep) => prevStep + 1);
	};
	const onContinue = async () => {
		if (currentUnderStep + 1 < steps.underStep.length) {
			handleContinueUnderStepClick();
		} else {
			handleContinueStepsClick();
		}
	};

	return (
		<>
			<p className="p-h1">{steps.title}</p>
			<p className="p-h3 text-center">{steps.subtitle}</p>
			{errorRequest && (
				<p
					className="p-label p-error"
					style={{ textAlign: "center", marginTop: "50px" }}>
					{errorRequest}
				</p>
			)}{" "}
			<form>
				{steps.underStep[currentUnderStep]?.fields.map((fieldName) => (
					<div className="auth-input-container" key={fieldName}>
						<p className={`p-label ${errors[fieldName] ? "p-error" : ""}`}>
							{fieldName.replace(/([A-Z])/g, " $1").trim()}
						</p>
						<Controller
							name={fieldName}
							control={control}
							rules={{
								required: `Ce champ est requis`,
								...(fieldName === "emailDuRéprésentant" && {
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: "Ce champ doit être une adresse e-mail valide",
									},
								}),
								...(fieldName.includes("motDePasse") && {
									minLength: 8,
									validate: isPasswordValid,
								}),
								...(fieldName === "confirmationDeMotDePasse" && {
									validate: isPasswordMatch,
								}),
							}}
							render={({ field }) => (
								<>
									<input
										type={
											fieldName === "motDePasse" ||
											fieldName === "confirmationDeMotDePasse"
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
										<span className="p-error">{errors[fieldName].message}</span>
									)}
								</>
							)}
						/>
					</div>
				))}

				<button
					type="button"
					className="btn-secondary"
					onClick={async () => {
						const isValidStep = await trigger(
							steps.underStep[currentUnderStep]?.fields
						);
						if (isValidStep) {
							if (
								currentStep >= Length - 1 &&
								currentUnderStep >= steps.underStep.length - 1
							) {
								handleSubmit(onSubmit(getValues()));
							} else {
								onContinue();
							}
						}
					}}>
					{isLoading ? (
						<>
							<img src={LoadingCercleGif} alt="loading ..." width={40} />
						</>
					) : (
						<>{currentStep >= Length - 1 ? "S'inscrire" : "Continuer"}</>
					)}
				</button>
				{currentStep > 0 || currentUnderStep > 0 ? (
					<button
						type="button"
						className="no-border btn-primary"
						onClick={onBack}>
						Retour
					</button>
				) : (
					<p className="p-h3 text-center">
						Déjà inscrit ?{" "}
						<span className="p-a" onClick={() => navigate("/login")}>
							Connexion
						</span>
					</p>
				)}
			</form>
		</>
	);
};
export default SignupFormWithCompany;
