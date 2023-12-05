import React from "react";
import ComponentSettings from "../../../components/admin/settings/component.settings";
import SettingsFormModal from "../../../components/admin/settings/modal.settings.form";
import { useUserData } from "../../../context/authentification/userContext.jsx";
const SettingAdminPage = () => {
	const { data, updatedProfil } = useUserData();
	const user = data.infosUsers;
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorRequest, setErrorRequest] = React.useState("");
	const [isOpenFormModal, setOpenFormModal] = React.useState(false);

	const onSubmit = async (data) => {
		try {
			setIsLoading(true);
			const formData = data;
			await updatedProfil(formData);
			closeFormModal();
		} catch (error) {
			console.log(error);
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
		}
	};

	const openFormModal = () => {
		setOpenFormModal(true);
	};
	const closeFormModal = () => {
		setOpenFormModal(false);
	};

	return (
		<>
			<ComponentSettings openFormModal={openFormModal} user={user} />
			<SettingsFormModal
				user={user}
				onSubmit={onSubmit}
				isLoading={isLoading}
				isOpen={isOpenFormModal}
				errorRequest={errorRequest}
				onRequestClose={closeFormModal}
			/>
		</>
	);
};

export default SettingAdminPage;
