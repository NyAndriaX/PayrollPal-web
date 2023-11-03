import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useCompanyData } from "../../../../context/admin/company/companyContext";
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
			"telRepresentant",
			"adresseDuRepresentant",
		],
	},
];

const ComponentUpdateModalCompany = ({ isOpen, onRequestClose, item }) => {
	const { updateUserCompany } = useCompanyData();
	const [currentStep, setCurrentStep] = React.useState(0);
	const [isLoading, setLoading] = React.useState(false);
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
	} = useForm({ mode: "onChange" });

	const fieldMapping = {
		raisonSocial: "raisonSocial",
		adresseDeLEntreprise: "adresseEntreprise",
		numeroDIdentificationFiscal: "numeroIdentificationFiscale",
		nomDuRepresentant: "nomRepresentant",
		prenomDuRepresentant: "prenomRepresentant",
		emailDuRepresentant: "emailRepresentant",
		telRepresentant: "telRepresentant",
		adresseDuRepresentant: "adresseRepresentant",
	};

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

	const handleConfirmAccept = async (data) => {
		const formData = {};
		try {
			setLoading(true);
			for (const fieldName in data) {
				if (fieldMapping[fieldName]) {
					formData[fieldMapping[fieldName]] = data[fieldName];
				} else {
					formData[fieldName] = data[fieldName];
				}
			}

			await updateUserCompany(item._id, formData);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}

		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation d'acceptation"
			className="modal">
			<p className="p-h1">Modification</p>
			<p className="p-h3 text-center">Modifier vos informations</p>
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				{steps[currentStep].fields.map((fieldName) => (
					<div className="auth-input-container" key={fieldName}>
						<p className={`p-label ${errors[fieldName] ? "p-error" : ""}`}>
							{fieldName.replace(/([A-Z])/g, " $1").trim()}
						</p>
						<Controller
							name={fieldName}
							control={control}
							defaultValue={item[fieldMapping[fieldName]] || ""}
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
										type={field.type || "text"}
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
							? handleSubmit(handleConfirmAccept)
							: handleContinueClick
					}
					className="btn-secondary">
					{isLoading ? (
						<>Changement ...</>
					) : (
						<>{currentStep === steps.length - 1 ? "Modifier" : "Continuer"}</>
					)}
				</button>
				<button type="button" className="btn-primary" onClick={handleBack}>
					Retour
				</button>
			</form>
		</Modal>
	);
};

export default ComponentUpdateModalCompany;
