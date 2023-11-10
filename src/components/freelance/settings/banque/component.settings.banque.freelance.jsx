import React from "react";
import ComponentSettingsModalBanqueFreelance from "./component.settings.modal.banque.freelance";
import { useUserData } from "../../../../context/authentification/userContext";

const ComponentSettingsBanqueFreelance = () => {
	const [isOpenSettingsBanqueModal, setOpenSettingsBanqueModal] =
		React.useState(false);
	const { data, updatedSettingsUserFreelancer } = useUserData();
	const { infosUsers } = data;
	const { informationsBancaires } = infosUsers;

	const onSubmit = async (data) => {
		const userData = { ...infosUsers };
		const userId = infosUsers._id;

		Object.assign(userData.informationsBancaires, data);
		try {
			await updatedSettingsUserFreelancer(userId, userData);
		} catch (error) {
			console.log(error);
		}
	};

	const openSettingsBanqueModal = () => {
		setOpenSettingsBanqueModal(true);
	};

	const closeSettingsBanqueModal = () => {
		setOpenSettingsBanqueModal(false);
	};

	return (
		<>
			<div className="card">
				{" "}
				<div className="justify-space-between">
					<p className="p-h2 text-black-start">Information Bancaires</p>
					<button
						className="btn-secondary"
						style={{ width: "auto" }}
						onClick={openSettingsBanqueModal}>
						Edit
					</button>
				</div>
				<div className="column" style={{ marginTop: "1rem" }}>
					<div>
						<p className="p-h3">IBAN</p>
						<p className="p text-black-start">{informationsBancaires.IBAN}</p>
					</div>
					<div>
						<p className="p-h3">BIG</p>
						<p className="p text-black-start">{informationsBancaires.BIC}</p>
					</div>
					<div>
						<p className="p-h3">Nom du titulaire</p>
						<p className="p text-black-start">
							{informationsBancaires.nomTitulaire}
						</p>
					</div>
				</div>
			</div>
			<ComponentSettingsModalBanqueFreelance
				isOpen={isOpenSettingsBanqueModal}
				onRequestClose={closeSettingsBanqueModal}
				onSubmit={onSubmit}
				informationsBancaires={informationsBancaires}
			/>
		</>
	);
};

export default ComponentSettingsBanqueFreelance;
