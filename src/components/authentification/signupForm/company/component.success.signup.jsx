import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessPng from "../../../../assets/success-icon.png";

const ComponentSuccessSignup = () => {
	const navigate = useNavigate();
	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="column">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<img
						src={SuccessPng}
						alt="Votre inscription est à succés"
						style={{ width: "70px", height: "auto" }}
					/>
				</div>
				<p className="p-h2">Inscription Entreprise Réussie !</p>
				<p className="p" style={{ color: "#7e7878", textAlign: "center" }}>
					Votre inscription a été un succès marquant, ouvrant la voie à de
					nouvelles opportunités et à une croissance prometteuse pour votre
					entreprise
				</p>
				<button className="btn-secondary" onClick={() => navigate("/login")}>
					Retourne vers l'application
				</button>
			</div>
		</div>
	);
};
export default ComponentSuccessSignup;
