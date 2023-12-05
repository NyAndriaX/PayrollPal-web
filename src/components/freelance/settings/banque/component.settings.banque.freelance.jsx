import React from "react";
import ComponentSettingsModalBanqueFreelance from "./component.settings.modal.banque.freelance";
import { useUserData } from "../../../../context/authentification/userContext";

const ComponentSettingsBanqueFreelance = () => {
	const [isOpenSettingsBanqueModal, setOpenSettingsBanqueModal] =
		React.useState(false);
	const { data, updatedUserFreelancer } = useUserData();
	const { infosUsers } = data;
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorRequest, setErrorRequest] = React.useState("");

	const onSubmit = async (data) => {
		try {
			setIsLoading(true);
			setErrorRequest(false);
			const userData = { ...infosUsers };
			const userId = infosUsers._id;
			Object.assign(infosUsers, data);
			await updatedUserFreelancer(userId, userData);
			closeSettingsBanqueModal();
		} catch (error) {
			console.log(error);
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
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
						<p className="p text-black-start">{infosUsers.iban}</p>
					</div>
					<div>
						<p className="p-h3">BIG</p>
						<p className="p text-black-start">{infosUsers.bic}</p>
					</div>
					<div>
						<p className="p-h3">Nom du banque</p>
						<p className="p text-black-start">{infosUsers.banque}</p>
					</div>
				</div>
			</div>
			<ComponentSettingsModalBanqueFreelance
				isOpen={isOpenSettingsBanqueModal}
				onRequestClose={closeSettingsBanqueModal}
				errorRequest={errorRequest}
				infosUsers={infosUsers}
				isLoading={isLoading}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default ComponentSettingsBanqueFreelance;
