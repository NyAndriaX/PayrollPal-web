import React from "react";
import ComponentsTemplateContract from "./components.template.contract";

const ComponentsTemplateContractInstance = <ComponentsTemplateContract />;

const steps = [
	{
		label: "Étape 1",
		title: "Inscription",
		subtitle: "Entrez votre email et votre mot de passe",
		underStep: [
			{
				label: "Étape 1",
				fields: ["nom", "prenom", "email", "téléphone"],
			},
			{
				label: "Étape 2",
				fields: ["motDePasse", "confirmationDeMotDePasse"],
			},
		],
	},
	{
		label: "Étape 2",
		title: "Compte et profil",
		subtitle:
			"Ces informations sont nécessaires pour créer votre compte ou rédiger les contrats des missions à venir.",
		underStep: [
			{
				label: "Étape 1",
				fields: ["adresse", "codePostal", "ville", "numéroNif", "poste"],
			},
		],
	},
	{
		label: "Étape 3",
		title: "Informations boncaires",
		subtitle:
			"Ces informations sont nécessaires pour régler vos jours travaillés.",
		underStep: [
			{
				label: "Étape 1",
				fields: ["iban", "bic", "banque"],
			},
		],
	},
	{
		label: "Étape 4",
		title: "Votre contrat",
		subtitle: "Passez en revue et signez votre contrat.",
		underStep: [
			{
				label: "Étape 1",
				fields: ["isAcceptedContract"],
				description: "J'ACCEPTE LES CONDITIONS DU CONTRAT. BON POUR ACCORD ",
				components: ComponentsTemplateContractInstance,
			},
		],
	},
	{
		label: "Étape 5",
		title: "Justificatif d'identité",
		subtitle:
			"Nous avons vesoin de vérifier votre identité, veuillez télécharger une piéce d'identité (CIN,Passeport).",
		underStep: [
			{
				label: "Étape 1",
				fields: ["jutificatifDIdentité"],
			},
		],
	},
];

const transformDataToFormData = (data, dataCin) => {
	const formData = new FormData();

	formData.append("nom", data.nom || "");
	formData.append("prenom", data.prenom || "");
	formData.append("email", data.email || "");
	formData.append("tel", data.téléphone || "");
	formData.append("ville", data.ville || "");
	formData.append("adresse", data.adresse || "");
	formData.append("iban", data.iban || "");
	formData.append("password", data.motDePasse || "");
	formData.append("nif", data.numéroNif || "");
	formData.append("poste", data.poste || "");
	formData.append("bic", data.bic || "");
	formData.append("banque", data.banque || "");
	formData.append("cin", dataCin || "");
	formData.append("isPasswordConfirmed", data.confirmationDeMotDePasse || "");
	formData.append("codePostal", data.codePostal || "");
	formData.append("isAcceptedContract", data.isAcceptedContract || "");

	return formData;
};

export { steps, transformDataToFormData };
