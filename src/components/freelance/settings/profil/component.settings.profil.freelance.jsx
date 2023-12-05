import React from "react";
import ComponentSettingsModalProfilFreelance from "./component.settings.modal.profil.freelance";
import { useUserData } from "../../../../context/authentification/userContext";

const ComponentSettingsProfilFreelance = () => {
	const { data, updatedUserFreelancer } = useUserData();
	const [isOpenModalSettingProfil, setOpenModalSettingProfil] =
		React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorRequest, setErrorRequest] = React.useState("");
	const { infosUsers } = data;

	const openModalSettingProfil = () => {
		setOpenModalSettingProfil(true);
	};
	const closeModalSettingProfil = () => {
		setOpenModalSettingProfil(false);
	};

	const onSubmit = async (data) => {
		try {
			setIsLoading(true);
			setErrorRequest("");
			const userData = { ...infosUsers };
			const userId = infosUsers._id;
			Object.assign(userData, data);
			await updatedUserFreelancer(userId, userData);
			closeModalSettingProfil();
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
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
						<p className="p-h3">Nom et prenom</p>
						<p className="p text-black-start">
							{infosUsers.nom} {infosUsers.prenom}
						</p>
					</div>
					<div>
						<p className="p-h3">Email</p>
						<p className="p text-black-start">{infosUsers.email}</p>
					</div>
					<div>
						<p className="p-h3">Adresse</p>
						<p className="p text-black-start">{infosUsers.adresse}</p>
					</div>
					<div>
						<p className="p-h3">Code postal</p>
						<p className="p text-black-start">{infosUsers.codePostal}</p>
					</div>
					<div>
						<p className="p-h3">Ville</p>
						<p className="p text-black-start">{infosUsers.ville}</p>
					</div>
				</div>
			</div>
			<ComponentSettingsModalProfilFreelance
				isOpen={isOpenModalSettingProfil}
				onRequestClose={closeModalSettingProfil}
				errorRequest={errorRequest}
				isLoading={isLoading}
				onSubmit={onSubmit}
				user={infosUsers}
			/>
		</>
	);
};

export default ComponentSettingsProfilFreelance;
