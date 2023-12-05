import React from "react";
import CardSettingsCompany from "../../../components/company/settings/company/card.settings.company";
import CardSettingsProfil from "../../../components/company/settings/profil/card.settings.profil";
import { useUserData } from "../../../context/authentification/userContext";
import ModalSettingsProfil from "../../../components/company/settings/profil/modal.settings.profil";
import ModalSettingsCompany from "../../../components/company/settings/company/modal.settings.company";

const SettingsPageCompany = () => {
	const [isOpentEditModalProfil, setOpenEditModalProfil] =
		React.useState(false);
	const [isOpenEditModalCompany, setOpenEditModalCompany] =
		React.useState(false);
	const { data, updatedProfilForCompany } = useUserData();
	const user = data.infosUsers;

	const onEditProfil = async (data) => {
		const formData = { ...user };
		const userId = user._id;

		Object.assign(formData, data);
		try {
			await updatedProfilForCompany(userId, formData);
		} catch (error) {
			throw error;
		}
	};

	const onEditCompany = async (data) => {
		const formData = { ...user };

		const userId = user._id;

		Object.assign(formData, data);
		try {
			await updatedProfilForCompany(userId, formData);
		} catch (error) {
			throw error;
		}
	};

	const onOpenEditModalProfil = () => {
		setOpenEditModalProfil(true);
	};

	const onCloseEditModalProfil = () => {
		setOpenEditModalProfil(false);
	};

	const onOpenEditModalCompany = () => {
		setOpenEditModalCompany(true);
	};

	const onCloseEditModalCompany = () => {
		setOpenEditModalCompany(false);
	};

	return (
		<div className="justify-space-between" style={{ alignItems: "inherit" }}>
			<>
				<CardSettingsProfil
					onOpenEditModalProfil={onOpenEditModalProfil}
					user={user}
				/>
				<ModalSettingsProfil
					user={user}
					isOpen={isOpentEditModalProfil}
					onRequestClose={onCloseEditModalProfil}
					onSubmit={onEditProfil}
				/>
			</>
			<>
				<CardSettingsCompany
					user={user}
					onOpenEditModalCompany={onOpenEditModalCompany}
				/>
				<ModalSettingsCompany
					user={user}
					isOpen={isOpenEditModalCompany}
					onRequestClose={onCloseEditModalCompany}
					onSubmit={onEditCompany}
				/>
			</>
		</div>
	);
};

export default SettingsPageCompany;
