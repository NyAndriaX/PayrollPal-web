import React from "react";
import { useNavigate } from "react-router-dom";

const ComponentCardFreelance = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="justify-space-between" style={{ alignItems: "stretch" }}>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3">Contrat</p>
					<p className="p" style={{ color: "black" }}>
						vous travaillez pour l'entreprise{" "}
						<span style={{ color: "#3650fb" }}>agriculture.</span>
					</p>
					<p className="p" style={{ color: "black" }}>
						Votre taux journalier moyen est de{" "}
						<span style={{ color: "#3650fb" }}>213£.</span>
					</p>
				</div>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3-secondary">Jours déposés</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">0</p>
						<button
							className="btn-secondary"
							onClick={() => navigate("/Dépôt%20des%20jours")}>
							Déposer les jours du mois
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default ComponentCardFreelance;
