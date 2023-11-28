import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../../context/authentification/userContext";
import { useSearchParams } from "../../../hooks/useSearchParams";
import { useNavigate } from "react-router-dom";

const ComponentValidationEmail = () => {
	const navigate = useNavigate();
	const email = useSearchParams("e");
	const [token, setToken] = React.useState("");
	const { isEmailValidAction } = useUserData();
	const [isLoading, setIsLoading] = React.useState(false);
	const [haveErrorSubmit, setHaveErrorSubmit] = React.useState(false);

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			setHaveErrorSubmit(false);
			const dataToken = token.token;
			const data = { token: dataToken, email };
			const result = await isEmailValidAction(data);
			const { success, user } = result.data;
			if (success && user.roles === "ROLES_FREELANCE") {
				navigate(`/profile/${user._id}/compte-profile`);
			} else {
				navigate("/login");
			}
			setIsLoading(false);
		} catch (error) {
			setHaveErrorSubmit(true);
		}
	};

	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			{" "}
			<div className="contentTheme">
				<div className="bg-logo">
					<h1 className="logo">F</h1>
				</div>
				<p className="p-h2">Freelpay</p>
			</div>
			<p className="p-h1">Validation d'email</p>
			<p className="p-h3 text-center">
				Nous avons envoyé un code vérification à votre adresse email:
				email@gmail.com
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
						<>
							<FontAwesomeIcon icon={faRetweet} /> Relance
						</>
					) : (
						<>{isLoading ? "chargement ..." : "Valider"}</>
					)}
				</button>
				<button className=" no-border btn-primary">Retour</button>
			</form>
		</div>
	);
};
export default ComponentValidationEmail;
