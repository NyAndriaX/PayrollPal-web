import { ComponentSettingsFreelanceStyled } from "./component.settings.styled.freelance";
import ComponentSettingsProfilFreelance from "./profil/component.settings.profil.freelance";
import ComponentSettingsAdresseFreelance from "./adresse/component.settings.adresse.freelance";
import ComponentSettingsBanqueFreelance from "./banque/component.settings.banque.freelance";
import ComponentSettingsJustificatifFreelance from "./justificatifs/component.settings.justificatif.freelance";

const ComponentSettingsFreelance = () => {
	return (
		<ComponentSettingsFreelanceStyled>
			<div className="row">
				<ComponentSettingsProfilFreelance />
				<ComponentSettingsAdresseFreelance />
				<ComponentSettingsBanqueFreelance />
				<ComponentSettingsJustificatifFreelance />
			</div>
		</ComponentSettingsFreelanceStyled>
	);
};
export default ComponentSettingsFreelance;
