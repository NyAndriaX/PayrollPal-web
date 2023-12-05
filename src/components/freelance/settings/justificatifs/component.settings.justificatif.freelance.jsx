import React from "react";
import { apiConfig } from "../../../../config/apiConfig";
import { useUserData } from "../../../../context/authentification/userContext";

const ComponentSettingsJustificatifFreelance = () => {
	const { data } = useUserData();
	const { infosUsers } = data;
	return (
		<div className="card">
			{" "}
			<div className="justify-space-between">
				<p className="p-h2 text-black-start">Justificatifs</p>
			</div>
			<div className="column" style={{ marginTop: "1rem" }}>
				<div>
					<p className="p-h3">Pièce d'identité</p>
					<p className="p text-black-start">
						Fichier uploadé le 13 septembre 2022
					</p>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "20px",
					}}>
					<img
						src={apiConfig.api_url_backend + "/cin/" + infosUsers.cin}
						style={{
							width: "100px",
							height: "50px",
							borderRadius: "8px",
							objectFit: "cover",
						}}
						alt="CIN/Passport"
					/>
					<p className="p-a">Voir tous</p>
				</div>
			</div>
		</div>
	);
};

export default ComponentSettingsJustificatifFreelance;
