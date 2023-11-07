const CardSettingsCompany = ({ user, onOpenEditModalCompany }) => {
	return (
		<div className="card" style={{ maxWidth: "initial" }}>
			<div className="justify-space-between">
				<p className="p-h2 text-black-start">Entreprise</p>
				<button
					className="btn-secondary"
					style={{ width: "auto" }}
					onClick={onOpenEditModalCompany}>
					Edit
				</button>
			</div>
			<div className="column" style={{ marginTop: "1rem" }}>
				<div>
					<p className="p-h3">Raison social</p>
					<p className="p text-black-start">{user.raisonSocial}</p>
				</div>
				<div>
					<p className="p-h3">Numeros d'identification fiscale</p>
					<p className="p text-black-start">
						{user.numeroIdentificationFiscale}
					</p>
				</div>
				<div>
					<p className="p-h3">Adresse de l'entreprise</p>
					<p className="p text-black-start">{user.adresseEntreprise}</p>
				</div>
			</div>
		</div>
	);
};
export default CardSettingsCompany;
