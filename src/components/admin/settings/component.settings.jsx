import React from "react";

const ComponentSettings = ({ openFormModal, user }) => {
	return (
		<div className="justify-space-between">
			<div className="card-mini">
				<div className="justify-space-between">
					<p className="p-h2 text-black-start">Profil</p>
					<button
						className="btn-secondary"
						style={{ width: "auto" }}
						onClick={openFormModal}>
						Edit
					</button>
				</div>
				<div className="column" style={{ marginTop: "1rem" }}>
					<div>
						<p className="p-h3">Nom</p>
						<p className="p text-black-start">{user.nom}</p>
					</div>
					<div>
						<p className="p-h3">Prenom</p>
						<p className="p text-black-start">{user.prenom}</p>
					</div>
					<div>
						<p className="p-h3">Email</p>
						<p className="p text-black-start">{user.email}</p>
					</div>
					<div>
						<p className="p-h3">Rôles</p>
						<p className="p text-black-start">{user.roles}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComponentSettings;
