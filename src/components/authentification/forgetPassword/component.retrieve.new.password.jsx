import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import LoadingGif from "../../../assets/loading-cercle-dots.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../../context/authentification/userContext";

const ERROR_MESSAGES = {
	REQUIRED: "Ce champ est requis",
	MIN_LENGTH: "Le mot de passe doit avoir au moins 8 caractères",
	PASSWORD_VALIDATION: "Le mot de passe doit contenir au moins un chiffre",
	CONFIRMATION_MISMATCH:
		"La confirmation du mot de passe ne correspond pas au mot de passe",
	GENERIC: "Une erreur s'est produite.",
};

const ComponentRetrieveNewPassword = ({ form, nexStep, setForm }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });
	const navigate = useNavigate();
	const { resetPassword } = useUserData();
	const [errorRequest, setErrorRequest] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmationPassword, setShowConfirmationPassword] =
		useState(false);

	const isPasswordValid = (value) =>
		/\d/.test(value) || ERROR_MESSAGES.PASSWORD_VALIDATION;

	const isPasswordMatch = (value) => {
		const passwordValue = getValues("password");
		return value === passwordValue || ERROR_MESSAGES.CONFIRMATION_MISMATCH;
	};

	const renderInputField = (name, label, rules = {}) => (
		<>
			<p className={`p-label ${errors[name] ? "p-error" : ""}`}>{label}</p>
			<div className="input-container">
				<Controller
					name={name}
					control={control}
					rules={rules}
					render={({ field }) => (
						<div className="input-wrapper">
							<input
								type={
									name === "password"
										? showPassword
											? "text"
											: "password"
										: showConfirmationPassword
										? "text"
										: "password"
								}
								className={`input ${errors[name] ? "input-error" : ""}`}
								{...field}
							/>
							{name === "password" && (
								<FontAwesomeIcon
									icon={showPassword ? faEye : faEyeSlash}
									className="password-toggle-icon"
									onClick={() => setShowPassword((prevState) => !prevState)}
								/>
							)}
						</div>
					)}
				/>
			</div>
			{errors[name] && <span className="p-error">{errors[name].message}</span>}
		</>
	);

	const handleSubmitNewPassword = async (formData) => {
		try {
			setIsLoading(true);
			if (formData.password !== formData.confirmationPassword) {
				throw new Error(ERROR_MESSAGES.CONFIRMATION_MISMATCH);
			}
			const updatedForm = await new Promise((resolve) => {
				setForm((prevForm) => {
					const updatedForm = {
						...prevForm,
						newPassword: formData.password,
					};
					resolve(updatedForm);
					return updatedForm;
				});
			});
			await resetPassword(updatedForm);
			navigate("/signin/mot_de_passe_oubliee/success");
		} catch (error) {
			console.log(error);
			setErrorRequest(error.response?.data.message || ERROR_MESSAGES.GENERIC);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitNewPassword)}>
			{errorRequest && (
				<p className="text-center p-label p-error">{errorRequest}</p>
			)}

			{renderInputField("password", "Nouveau mot de passe", {
				required: ERROR_MESSAGES.REQUIRED,
				minLength: { value: 8, message: ERROR_MESSAGES.MIN_LENGTH },
				validate: isPasswordValid,
			})}

			{renderInputField("confirmationPassword", "Confirmation mot de passe", {
				required: ERROR_MESSAGES.REQUIRED,
				validate: isPasswordMatch,
			})}

			<button type="submit" className="btn-secondary">
				{isLoading ? (
					<img src={LoadingGif} alt="chargement..." style={{ width: "40px" }} />
				) : (
					"Continuer"
				)}
			</button>

			<p className="p-h3 text-center">
				Pas inscrit ?{" "}
				<span className="p-a" onClick={() => navigate("/signup")}>
					S'inscrire
				</span>
			</p>
		</form>
	);
};

export default ComponentRetrieveNewPassword;
