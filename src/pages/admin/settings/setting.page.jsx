import React from "react";
import ComponentSettings from "../../../components/admin/settings/component.settings";
import SettingsFormModal from "../../../components/admin/settings/modal.settings.form";
import { useUserData } from "../../../context/authentification/userContext.jsx";
const SettingAdminPage = () => {
	const { data, updatedProfil } = useUserData();
	const user = data.infosUsers;
	const [isOpenFormModal, setOpenFormModal] = React.useState(false);

	const onSubmit = (data) => {
		const formData = data;
		updatedProfil(formData);
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
				isOpen={isOpenFormModal}
				onRequestClose={closeFormModal}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default SettingAdminPage;
