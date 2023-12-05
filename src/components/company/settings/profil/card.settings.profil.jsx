const CardSettingsProfil = ({ user, onOpenEditModalProfil }) => {
	return (
		<div className="card" style={{ maxWidth: "initial" }}>
			<div className="justify-space-between">
				<p className="p-h2 text-black-start">Profil du réprésentant</p>
				<button
					className="btn-secondary"
					style={{ width: "auto" }}
					onClick={onOpenEditModalProfil}>
					Edit
				</button>
			</div>
			<div className="column" style={{ marginTop: "1rem" }}>
				<div>
					<p className="p-h3">Nom et prenom</p>
					<p className="p text-black-start">
						{user.representantNom} {user.representantPrenom}
					</p>
				</div>
				<div>
					<p className="p-h3">Email</p>
					<p className="p text-black-start">{user.representantEmail}</p>
				</div>
				<div>
					<p className="p-h3">Adresse</p>
					<p className="p text-black-start">{user.representantAdresse}</p>
				</div>
				<div>
					<p className="p-h3">Code postal</p>
					<p className="p text-black-start">{user.representantCodePostal}</p>
				</div>
				<div>
					<p className="p-h3">Ville</p>
					<p className="p text-black-start">{user.representantVille}</p>
				</div>
			</div>
		</div>
	);
};

export default CardSettingsProfil;
