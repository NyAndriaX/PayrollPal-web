import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
		],
	},
];

const ComponentModalFormCompany = ({
	isOpen,
	onRequestClose,
	onSubmit,
	isLoading,
}) => {
	const [currentStep, setCurrentStep] = React.useState(0);
	const [errorRequestMessage, setErrorRequestMessage] = React.useState("");
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });

	const handleContinueClick = async () => {
		if (currentStep + 1 <= steps.length) {
			const isValidStep = await trigger(steps[currentStep].fields);
			if (isValidStep) {
				setCurrentStep((prevStep) => prevStep + 1);
			}
		}
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleConfirmAccept = (data) => {
		onSubmit(data);
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation d'acceptation"
			className="modal">
			<div className="column">
				<div className="column">
					<p className="p-h2">Inscription Entreprise Simplifiée</p>
					<p className="p-h3 text-center" style={{ color: "rgb(73 73 78)" }}>
						Un processus d'inscription rapide pour lancer votre aventure
						professionnelle sans tracas.
					</p>
				</div>

				<form onSubmit={handleSubmit(handleConfirmAccept)}>
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
											<span className="p-error">
												{errors[fieldName].message}
											</span>
										)}
									</>
								)}
							/>
						</div>
					))}

					<div className="column" style={{ marginTop: "20px" }}>
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
								<>
									{currentStep === steps.length - 1
										? "S'inscrire"
										: "Continuer"}
								</>
							)}
						</button>
						<button type="button" className="btn-primary" onClick={handleBack}>
							Retour
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default ComponentModalFormCompany;
