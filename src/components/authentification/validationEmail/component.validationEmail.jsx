import React from "react";
import { useUserData } from "../../../context/authentification/userContext";
import { useSearchParams } from "../../../hooks/useSearchParams";
import { useNavigate } from "react-router-dom";

const ComponentValidationEmail = () => {
	const navigate = useNavigate();
	const email = useSearchParams("e");
	const [token, setToken] = React.useState("");
	const { validationEmail } = useUserData();
	const [isLoading, setIsLoading] = React.useState(false);
	const [haveErrorSubmit, setHaveErrorSubmit] = React.useState(false);

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			setHaveErrorSubmit(false);
			const dataToken = token.token;
			const data = { token: dataToken, email };
			await validationEmail(data);
			navigate("/login");
			setIsLoading(false);
		} catch (error) {
			setHaveErrorSubmit(true);
		}
	};

	return (
		<div className="card">
			{" "}
			<div className="contentTheme">
				<div className="bg-logo">
					<h1 className="logo">F</h1>
				</div>
				<p className="p-h2">Freelpay</p>
			</div>
			<p className="p-h1">Validation d'email</p>
			<p className="p-h3 text-center">
				Entrez la code de confirmation que vous avez réçu
			</p>
			<form onSubmit={handleClick}>
				<p className="p-label">Code de confirmation</p>
				<input
					type="text"
					name="token"
					className="input"
					onChange={(e) => setToken({ [e.target.name]: e.target.value })}
					required
				/>
				<button
					type="submit"
					className={`btn-secondary ${
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
	);
};
export default ComponentValidationEmail;
