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
					<p className="p-h3">Adresse</p>
					<p className="p text-black-start">{user.entrepriseAdresse}</p>
				</div>
				<div>
					<p className="p-h3">Code postal</p>
					<p className="p text-black-start">{user.entrepriseCodePostal}</p>
				</div>
				<div>
					<p className="p-h3">Ville</p>
					<p className="p text-black-start">{user.entrepriseVille}</p>
				</div>
			</div>
		</div>
	);
};
export default CardSettingsCompany;
