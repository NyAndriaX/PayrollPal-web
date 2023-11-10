const ComponentSettingsJustificatifFreelance = () => {
	return (
		<div className="card">
			{" "}
			<div className="justify-space-between">
				<p className="p-h2 text-black-start">Justificatifs</p>
				<button className="btn-secondary" style={{ width: "auto" }}>
					Edit
				</button>
			</div>
			<div className="column" style={{ marginTop: "1rem" }}>
				<div>
					<p className="p-h3">Pièce d'identité</p>
					<p className="p text-black-start">
						Fichier uploadé le 13 septembre 2022
					</p>
				</div>
			</div>
		</div>
	);
};

export default ComponentSettingsJustificatifFreelance;
