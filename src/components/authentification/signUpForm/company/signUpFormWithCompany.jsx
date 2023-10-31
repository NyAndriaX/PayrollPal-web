import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { authActions } from "../../../../service/auth";
import { useNavigate } from "react-router-dom";

const steps = [
	{
		label: "Étape 1",
		fields: [
			"raisonSocial",
			"adresseDeLEntreprise",
			"numeroDIdentificationFiscal",
		],
	},
	{
		label: "Information Representant",
		fields: [
			"nomDuRepresentant",
			"prenomDuRepresentant",
			"emailDuRepresentant",
			"téléphoneDuRepresentant",
			"adresseDuRepresentant",
			"motDePasse",
			"confirmationDeMotDePasse",
		],
	},
];

const SignUpFormWidthCompany = () => {
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
	const [errorRequestMessage, setErrorRequestMessage] = React.useState("");

	const isPasswordMatch = (value) => {
		const passwordValue = getValues("motDePasse");
		return value === passwordValue || "Les mots de passe ne correspondent pas";
	};

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const transformData = (data) => {
		const transformedData = {
			raisonSocial: data.raisonSocial || "",
			adresseEntreprise: data.adresseDeLEntreprise || "",
			numeroIdentificationFiscale: data.numeroDIdentificationFiscal || "",
			nomRepresentant: data.nomDuRepresentant || "",
			emailRepresentant: data.emailDuRepresentant || "",
			prenomRepresentant: data.prenomDuRepresentant || "",
			telRepresentant: data.téléphoneDuRepresentant || "",
			adresseRepresentant: data.adresseDuRepresentant || "",
			password: data.motDePasse || "",
			isPasswordConfirmed: data.confirmationDeMotDePasse || "",
		};

		return transformedData;
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleContinueClick = async () => {
		if (currentStep + 1 <= steps.length) {
			const isValidStep = await trigger(steps[currentStep].fields);
			if (isValidStep) {
				setCurrentStep((prevStep) => prevStep + 1);
			}
		}
	};

	const onSubmit = async (data) => {
		// const resultTransformData = transformData(data);
		// setIsLoading(true);
		// try {
		// 	const sendData = await authActions.userRegisterCompany(
		// 		resultTransformData
		// 	);
		// 	const dataEmailEncoded = encodeURIComponent(
		// 		JSON.stringify(resultTransformData.emailRepresentant)
		// 	);
		// 	navigate(`/signup/confirmation_email?e=${dataEmailEncoded}`);
		// 	setIsLoading(false);
		// } catch (error) {
		// 	setIsLoading(false);
		// 	setErrorRequestMessage(error.response.data.error);
		// }
	};

	return (
		<div className="card">
			<div className="contentTheme">
				<div className="bg-logo">
					<h1 className="logo">F</h1>
				</div>
				<p className="p-h2">Freelpay</p>
			</div>
			<p className="p-h1">Inscription</p>
			<p className="p-h3 text-center">Entrez vos informations</p>
			{errorRequestMessage && (
				<p
					className="p-label p-error"
					style={{ textAlign: "center", marginTop: "50px" }}>
					{errorRequestMessage}
				</p>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				{steps[currentStep].fields.map((fieldName) => (
					<div className="auth-input-container" key={fieldName}>
						<p className={`p-label ${errors[fieldName] ? "p-error" : ""}`}>
							{fieldName.replace(/([A-Z])/g, " $1").trim()}
						</p>
						<Controller
							name={fieldName}
							control={control}
							rules={{
								required: `Ce champ est requis`,
								...(fieldName === "emailDuRepresentant" && {
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
					onClick={
						currentStep === steps.length - 1
							? handleSubmit(onSubmit)
							: handleContinueClick
					}
					className="btn-secondary">
					{isLoading ? (
						<>Changement ...</>
					) : (
						<>{currentStep === steps.length - 1 ? "S'inscrire" : "Continuer"}</>
					)}
				</button>
				<button type="button" className="btn-primary" onClick={handleBack}>
					Retour
				</button>
			</form>
		</div>
	);
};

export default SignUpFormWidthCompany;
