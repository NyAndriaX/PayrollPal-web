import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import LoadingGif from "../../../assets/loading-cercle-dots.gif";
import { useUserData } from "../../../context/authentification/userContext";

const ComponentValidationtoken = ({ nexStep, form, setForm }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });
	const navigate = useNavigate();
	const { validateResetToken, generateAndSendResetToken } = useUserData();
	const [errorRequest, setErrorRequest] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLoadingResend, setIsLoadingResend] = React.useState(false);

	const handleSubmitToken = async (e) => {
		try {
			setIsLoading(true);
			setErrorRequest("");
			await validateResetToken(e.token);
			setForm((prevForm) => ({
				...prevForm,
				token: e.token,
			}));
			nexStep();
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
		}
	};
	const handleResendToken = async () => {
		try {
			setIsLoadingResend(true);
			await generateAndSendResetToken(form.email);
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoadingResend(false);
		}
	};
	return (
		<form onSubmit={handleSubmit(handleSubmitToken)}>
			{errorRequest && (
				<p className="text-center p-label p-error">{errorRequest}</p>
			)}
			<p className={` p-label ${errors["token"] ? "p-error" : ""}`}>token</p>

			<Controller
				name="token"
				control={control}
				rules={{
					required: `Ce champ est requis`,
				}}
				render={({ field }) => (
					<>
						<input
							type="token"
							className={`input ${errors["token"] ? "input-error" : ""}`}
							{...field}
						/>
						{errors["token"] && (
							<span className="p-error">{errors["token"].message}</span>
						)}
					</>
				)}
			/>
			<button type="submit" className="btn-secondary">
				{isLoading ? (
					<img src={LoadingGif} alt="chargement..." style={{ width: "40px" }} />
				) : (
					"Continuer"
				)}
			</button>
			<p
				className="p-h3 text-center"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "4px",
				}}>
				Code non reçu ?{" "}
				<span className="p-a" onClick={handleResendToken}>
					{isLoadingResend ? (
						<img
							src={LoadingGif}
							alt="chargement..."
							style={{ width: "40px" }}
						/>
					) : (
						"Renvoyer"
					)}
				</span>
			</p>
		</form>
	);
};

export default ComponentValidationtoken;
