import React from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../../assets/success-icon.png";

const ComponentSuccessChangePassword = () => {
	const navigate = useNavigate();
	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="column">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<img
						src={Success}
						alt="Réprésentant du succés"
						style={{ width: "70px" }}
					/>
				</div>
				<p className="p-h2">Mot de Passe Victorieux!</p>
				<p className="p" style={{ color: "#7e7878", textAlign: "center" }}>
					La transition triomphante vers un nouveau mot de passe renforcé a
					propulsé la sécurité vers de nouveaux sommets, établissant une norme
					inégalée de protection en ligne.
				</p>
				<button className="btn-secondary" onClick={() => navigate("/login")}>
					Retourne vers l'application
				</button>
			</div>
		</div>
	);
};

export default ComponentSuccessChangePassword;
