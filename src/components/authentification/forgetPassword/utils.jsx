import ComponentSelectedEmail from "./component.selected.email.jsx";
import ComponentRetrieveNewPassword from "./component.retrieve.new.password.jsx";
import ComponentValidationEmail from "./component.validation.email.jsx";
import ComponentRetrieveEmail from "./component.retrieve.email.jsx";

const ComponentSelectedEmailInstance = <ComponentSelectedEmail />;
const ComponentRetrieveEmailInstance = <ComponentRetrieveEmail />;
const ComponentValidationEmailInstance = <ComponentValidationEmail />;
const ComponentRetrieveNewPasswordInstance = <ComponentRetrieveNewPassword />;

const steps = [
	{
		label: "Étape 1",
		title: "Choix de l'E-mail de Récupération",
		subtitle: "Sélectionnez l'e-mail pour réinitialiser votre mot de passe.",
		components: ComponentSelectedEmailInstance,
	},
	{
		label: "Étape 2",
		title: "Récupération d'E-mail de Compte",
		subtitle:
			"Entrez votre e-mail ('exemple@domaine.com') pour récupérer rapidement votre compte.",
		components: ComponentRetrieveEmailInstance,
	},
	{
		label: "Étape 3",
		title: "Validation d'E-mail Facile",
		subtitle:
			"Vérifiez votre adresse e-mail ('exemple@domaine.com') pour finaliser la validation du compte.",
		components: ComponentValidationEmailInstance,
	},
	{
		label: "Étape 4",
		title: "Nouveau Mot de Passe Simplifié",
		subtitle:
			"Saisissez votre nouveau mot de passe pour une mise à jour instantanée du compte.",
		components: ComponentRetrieveNewPasswordInstance,
	},
];
export { steps };
