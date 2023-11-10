import React from "react";
import ComponentSettingsModalProfilFreelance from "./component.settings.modal.profil.freelance";
import { useUserData } from "../../../../context/authentification/userContext";

const ComponentSettingsProfilFreelance = () => {
	const { data, updatedSettingsUserFreelancer } = useUserData();
	const { infosUsers } = data;
	const [isOpenModalSettingProfil, setOpenModalSettingProfil] =
		React.useState(false);

	const openModalSettingProfil = () => {
		setOpenModalSettingProfil(true);
	};
	const closeModalSettingProfil = () => {
		setOpenModalSettingProfil(false);
	};

	const onSubmit = async (data) => {
		const userData = { ...infosUsers };
		const userId = infosUsers._id;

		Object.assign(userData, data);
		try {
			await updatedSettingsUserFreelancer(userId, userData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="card">
				<div className="justify-space-between">
					<p className="p-h2 text-black-start">Profil</p>
					<button
						className="btn-secondary"
						style={{ width: "auto" }}
						onClick={openModalSettingProfil}>
						Edit
					</button>
				</div>
				<div className="column" style={{ marginTop: "1rem" }}>
					<div>
						<p className="p-h3">Nom</p>
						<p className="p text-black-start">{infosUsers.nom}</p>
					</div>
					<div>
						<p className="p-h3">Prenom</p>
						<p className="p text-black-start">{infosUsers.prenom}</p>
					</div>
					<div>
						<p className="p-h3">Email</p>
						<p className="p text-black-start">{infosUsers.email}</p>
					</div>
				</div>
			</div>
			<ComponentSettingsModalProfilFreelance
				isOpen={isOpenModalSettingProfil}
				onRequestClose={closeModalSettingProfil}
				onSubmit={onSubmit}
				user={infosUsers}
			/>
		</>
	);
};

export default ComponentSettingsProfilFreelance;
