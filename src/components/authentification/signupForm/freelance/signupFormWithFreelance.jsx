import React from "react";
import { useNavigate } from "react-router-dom";
import LoadingCercleGif from "../../../../assets/loading-cercle-dots.gif";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

const SignupFormWidthFreelance = ({
	isLoading,
	errorRequest,
	currentUnderStep,
	setCurrentUnderStep,
	Length,
	onSubmit,
	currentStep,
	steps,
	handleBackSteps,
	handleContinueStepClick,
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });
	const navigate = useNavigate();
	const [cin, setCin] = React.useState(null);
	const [selectedFile, setSelectedFile] = React.useState(null);
	const handleContinueUnderStepClick = async () => {
		setCurrentUnderStep((prevStep) => prevStep + 1);
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setCin(e.target.files[0]);
			const reader = new FileReader();
			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setSelectedFile(null);
		}
	};

	const handleBackUnderStep = async () => {
		setCurrentUnderStep((prevStep) => prevStep - 1);
	};

	const isPasswordValid = (value) => {
		return (
			/\d/.test(value) || "Le mot de passe doit contenir au moins un chiffre"
		);
	};

	const isPasswordMatch = (value) => {
		const passwordValue = getValues("motDePasse");
		return value === passwordValue || "Les mots de passe ne correspondent pas";
	};

	const onBack = async () => {
		if (currentUnderStep > 0) {
			handleBackUnderStep();
		} else {
			handleBackSteps();
		}
	};

	const onContinue = async () => {
		const email = await getValues("email");
		if (currentUnderStep + 1 < steps.underStep.length) {
			handleContinueUnderStepClick();
		} else {
			handleContinueStepClick(email);
		}
	};

	return (
		<>
			<p className="p-h1">{steps.title}</p>
			<p className="p-h3 text-center">{steps.subtitle}</p>
			{errorRequest && (
				<p className="p-label p-error" style={{ textAlign: "center" }}>
					{errorRequest}
				</p>
			)}
			<form>
				{steps.underStep[currentUnderStep]?.fields.map((fieldName) => (
					<div className="auth-input-container" key={fieldName}>
						{fieldName === "isAcceptedContract" ? (
							<>
								<p className={`p-label ${errors[fieldName] ? "p-error" : ""}`}>
									Votre Contrat
								</p>
								<div style={{ margin: "10px 0px" }}>
									{steps.underStep[currentUnderStep]?.components}
								</div>
								<Controller
									name={fieldName}
									control={control}
									rules={{
										required: "Ce champ est requis",
									}}
									render={({ field }) => (
										<>
											<div
												style={{
													display: "flex",
													gap: "10px",
												}}>
												<input
													type="checkbox"
													className={`checkbox ${
														errors[fieldName] ? "input-error" : ""
													}`}
													{...field}
												/>
												<span className="p" style={{ color: "black" }}>
													{steps.underStep[currentUnderStep]?.description}
												</span>
											</div>
											{errors[fieldName] && (
												<span className="p-error">
													{errors[fieldName].message}
												</span>
											)}
										</>
									)}
								/>
							</>
						) : fieldName === "jutificatifDIdentité" ? (
							<>
								<p className={`p-label ${errors["cin"] ? "p-error" : ""}`}>
									{fieldName.replace(/([A-Z])/g, " $1").trim()}
								</p>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										border: "1px solid #eaeaea",
										padding: "20px 10px",
										borderRadius: "8px",
										backgroundColor: "#fcfdfe",
									}}>
									{selectedFile ? (
										<img
											src={selectedFile}
											alt="Selected File"
											style={{
												width: "100px",
												height: "50px",
												objectFit: "cover",
												borderRadius: "8px",
											}}
										/>
									) : (
										<FontAwesomeIcon
											icon={faCloudArrowDown}
											style={{
												color: "white",
												backgroundColor: "#3751ff",
												fontSize: "25px",
												borderRadius: "8px",
												padding: "15px 15px",
											}}
										/>
									)}
									<Controller
										name="fakeDataCin"
										control={control}
										rules={{ required: "Le CIN ou Passport est requis." }}
										render={({ field }) => (
											<>
												<input
													type="file"
													accept="image/*"
													onInput={(e) => {
														handleFileChange(e);
														field.onChange(e);
													}}
													{...field}
													style={{ display: "none" }}
												/>
											</>
										)}
									/>

									<button
										type="button"
										className="no-border btn-primary"
										style={{ textAlign: "start" }}
										onClick={() => {
											document.querySelector('input[type="file"]').click();
										}}>
										Joindre un fichier
									</button>
								</div>
								{errors["cin"] && (
									<span className="p-error">{errors["cin"].message}</span>
								)}
							</>
						) : (
							<>
								<p className={`p-label ${errors[fieldName] ? "p-error" : ""}`}>
									{fieldName.replace(/([A-Z])/g, " $1").trim()}
								</p>
								<Controller
									name={fieldName}
									control={control}
									rules={{
										required: "Ce champ est requis.",
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
										...(fieldName === "confirmationDeMotDePasse" && {
											validate: isPasswordMatch,
										}),
										...(fieldName === "numéroNif" && {
											pattern: {
												value: /^[0-9]{13}$/,
												message:
													"Ce champ doit être un NIF valide (13 chiffres).",
											},
										}),
										...(fieldName === "iban" && {
											pattern: {
												value: /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/,
												message: "Ce champ doit être un IBAN valide.",
											},
										}),
										...(fieldName === "bic" && {
											pattern: {
												value: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
												message: "Ce champ doit être un BIC valide.",
											},
										}),
									}}
									render={({ field }) => (
										<>
											<input
												type={
													fieldName === "numéroNif"
														? "number"
														: fieldName === "motDePasse" ||
														  fieldName === "confirmationDeMotDePasse"
														? "password"
														: "text"
												}
												className={`input ${
													errors[fieldName] ? "input-error" : ""
												}`}
												onInput={(e) => {
													if (fieldName === "numéroNif") {
														const trimmedValue = e.target.value.slice(0, 13);
														e.target.value = trimmedValue;
														field.onChange(trimmedValue);
													} else {
														field.onChange(e);
													}
												}}
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
							</>
						)}
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
								handleSubmit(onSubmit(getValues(), cin));
							} else {
								onContinue();
							}
						}
					}}>
					{isLoading ? (
						<>
							<img src={LoadingCercleGif} alt="loading ..." width={40} />
						</>
					) : currentStep === Length - 1 ? (
						"Je valide ma piéce d'identité"
					) : steps.underStep.length >= 0 &&
					  currentUnderStep + 1 <= steps.underStep.length ? (
						"Continuer"
					) : currentStep <= 0 ? (
						"S'inscrire"
					) : (
						"Valider"
					)}
				</button>
			</form>
			{currentStep > 0 || currentUnderStep > 0 ? (
				<button className="no-border btn-primary" onClick={onBack}>
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
		</>
	);
};

export default SignupFormWidthFreelance;
