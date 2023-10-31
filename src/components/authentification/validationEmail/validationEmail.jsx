import React from "react";
import { useSearchParams } from "../../../hooks/useSearchParams";
import { useNavigate } from "react-router-dom";

const ValidationEmail = () => {
	const navigate = useNavigate();
	const email = useSearchParams("e");
	const [token, setToken] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [haveErrorSubmit, setHaveErrorSubmit] = React.useState(false);

	const handleClick = async (e) => {
		e.preventDefault();
		// try {
		// 	setIsLoading(true);
		// 	setHaveErrorSubmit(false);
		// 	const dataToken = token.token;
		// 	const data = { token: dataToken, email };
		// 	await authActions.validationEmail(data);
		// 	navigate("/login");
		// 	setIsLoading(false);
		// } catch (error) {
		// 	setHaveErrorSubmit(true);
		// }
	};

	return (
		<div className="authComponents">
			<div>
				<div className="authCard">
					{" "}
					<div className="contentTheme">
						<div className="bg-logo">
							<h1 className="logo">F</h1>
						</div>
						<p className="p-large">Freelpay</p>
					</div>
					<p className="title">Validation d'email</p>
					<p className="p-title">
						Entrez la code de confirmation que vous avez réçu
					</p>
					<div className="auth-form">
						<form onSubmit={handleClick} action="">
							<p className="p-label">Code de confirmation</p>
							<input
								type="text"
								name="token"
								className="auth-input"
								onChange={(e) => setToken({ [e.target.name]: e.target.value })}
								required
							/>
							<button
								type="submit"
								className={`auth-btn ${
									haveErrorSubmit ? "auth-btn-error" : ""
								}`}>
								{haveErrorSubmit ? (
									<>relance</>
								) : (
									<>{isLoading ? "chargement ..." : "Valider"}</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ValidationEmail;
