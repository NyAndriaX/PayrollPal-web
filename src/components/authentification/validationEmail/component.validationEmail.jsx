import React from "react";
import { useUserData } from "../../../context/authentification/userContext";
import { useSearchParams } from "../../../hooks/useSearchParams";
import IconReload from "../../../assets/icon-reload.png";
import LoadingCercleGif from "../../../assets/loading-cercle-dots.gif";
import { useNavigate } from "react-router-dom";

const ComponentValidationEmail = () => {
	const navigation = useNavigate();
	const userEmail = useSearchParams("e");
	const [userToken, setUserToken] = React.useState("");
	const { isEmailValid, resendValidationCode } = useUserData();
	const [hasSubmissionError, setHasSubmissionError] = React.useState(false);
	const [submissionError, setSubmissionError] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [isResending, setIsResending] = React.useState(false);

	const handleValidationClick = async (e) => {
		e.preventDefault();

		if (!userToken) {
			handleSubmissionError("Veuillez saisir le code de confirmation.");
			return;
		}

		try {
			setIsLoading(true);
			const userTokenData = userToken;
			const userData = { token: userTokenData, email: userEmail };
			const result = await isEmailValid(userData);
			const { user } = result.data?.result;
			if (user.roles === "ROLES_COMPANY") {
				navigation("/signup/success/company");
			} else {
				navigation("/signup/success/freelance");
			}
		} catch (error) {
			handleSubmissionError(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleTokenInputChange = (e) => {
		setUserToken(e.target.value);
		if (hasSubmissionError) {
			clearSubmissionError();
		}
	};

	const handleRetryClick = (e) => {
		e.preventDefault();
		clearSubmissionError();
		handleValidationClick(e);
	};

	const handleResentCodeValidation = async () => {
		try {
			setIsResending(true);
			await resendValidationCode(userEmail);
			clearSubmissionError();
		} catch (error) {
			handleSubmissionError(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsResending(false);
		}
	};

	const handleSubmissionError = (message) => {
		setHasSubmissionError(true);
		setSubmissionError(message);
	};

	const clearSubmissionError = () => {
		setHasSubmissionError(false);
		setSubmissionError("");
	};

	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="contentTheme">
				<div className="bg-logo">
					<h1 className="logo">P</h1>
				</div>
				<p className="p-h2">Payrollpal</p>
			</div>
			<p className="p-h1">Validation d'email</p>
			<p className="p-h3 text-center">
				Nous avons envoyé un code de vérification à votre adresse email :{" "}
				{userEmail}
			</p>
			<form onSubmit={handleValidationClick}>
				<p className={`p-label ${hasSubmissionError && "p-error"}`}>
					Code de confirmation
				</p>
				{hasSubmissionError && (
					<p className={`p-error`} style={{ margin: 0 }}>
						{submissionError}
					</p>
				)}
				<input
					type="text"
					name="token"
					className={`input ${hasSubmissionError && "input-error"}`}
					onChange={handleTokenInputChange}
					required
				/>
				<button
					type="submit"
					className={`btn-secondary ${hasSubmissionError && "btn-error"}`}
					onClick={handleRetryClick}
					disabled={isLoading}>
					{hasSubmissionError ? (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								gap: "4px",
							}}>
							<img
								src={IconReload}
								alt="icon reload"
								style={{ width: "25px" }}
							/>{" "}
							Réessayer
						</div>
					) : (
						<>
							{isLoading ? (
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										gap: "10px",
									}}>
									<img src={LoadingCercleGif} alt="loading ..." width={40} />
								</div>
							) : (
								"Valider"
							)}
						</>
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
					<span>Code non reçu ? </span>
					<span className="p-a" onClick={handleResentCodeValidation}>
						{isResending ? (
							<img src={LoadingCercleGif} alt="loading ..." width={40} />
						) : (
							"Renvoyer"
						)}
					</span>
				</p>
			</form>
		</div>
	);
};

export default ComponentValidationEmail;
