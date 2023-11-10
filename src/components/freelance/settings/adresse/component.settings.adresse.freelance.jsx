import React from "react";
import ComponentSettingsModalAdresseFreelance from "./component.settings.adresse.modal.freelance";
import { useUserData } from "../../../../context/authentification/userContext";

const ComponentSettingsAdresseFreelance = () => {
	const [isOpenSettingModalAdresse, setOpenSettingModalAdresse] =
		React.useState(false);
	const { data, updatedSettingsUserFreelancer } = useUserData();
	const { infosUsers } = data;

	const openSettingsModalAdresse = () => {
		setOpenSettingModalAdresse(true);
	};

	const closeSettingsModalAdresse = () => {
		setOpenSettingModalAdresse(false);
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
				{" "}
				<div className="justify-space-between">
					<p className="p-h2 text-black-start">Adresse</p>
					<button
						className="btn-secondary"
						style={{ width: "auto" }}
						onClick={openSettingsModalAdresse}>
						Edit
					</button>
				</div>
				<div className="column" style={{ marginTop: "1rem" }}>
					<div>
						<p className="p-h3">Adresse</p>
						<p className="p text-black-start">{infosUsers.adresse}</p>
					</div>
					<div>
						<p className="p-h3">Code postal</p>
						<p className="p text-black-start">code postal</p>
					</div>
					<div>
						<p className="p-h3">Ville</p>
						<p className="p text-black-start">Ville</p>
					</div>
				</div>
			</div>
			<ComponentSettingsModalAdresseFreelance
				isOpen={isOpenSettingModalAdresse}
				onRequestClose={closeSettingsModalAdresse}
				user={infosUsers}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default ComponentSettingsAdresseFreelance;
