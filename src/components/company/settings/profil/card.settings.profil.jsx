const CardSettingsProfil = ({ user, onOpenEditModalProfil }) => {
	return (
		<div className="card" style={{ maxWidth: "initial" }}>
			<div className="justify-space-between">
				<p className="p-h2 text-black-start">Profil</p>
				<button
					className="btn-secondary"
					style={{ width: "auto" }}
					onClick={onOpenEditModalProfil}>
					Edit
				</button>
			</div>
			<div className="column" style={{ marginTop: "1rem" }}>
				<div>
					<p className="p-h3">Nom</p>
					<p className="p text-black-start">{user.nomRepresentant}</p>
				</div>
				<div>
					<p className="p-h3">Prenom</p>
					<p className="p text-black-start">{user.prenomRepresentant}</p>
				</div>
				<div>
					<p className="p-h3">Email</p>
					<p className="p text-black-start">{user.emailRepresentant}</p>
				</div>
				<div>
					<p className="p-h3">Adresse du representant</p>
					<p className="p text-black-start">{user.adresseRepresentant}</p>
				</div>
			</div>
		</div>
	);
};

export default CardSettingsProfil;
