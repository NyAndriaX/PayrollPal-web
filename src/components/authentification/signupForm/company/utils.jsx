const steps = [
	{
		label: "Étape 1",
		title: "Inscription",
		subtitle: "Information sur l'entreprise",
		underStep: [
			{
				label: "Étape 1",
				fields: ["raisonSocial", "adresse", "codePostal", "ville"],
			},
		],
	},
	{
		label: "Étape 2",
		title: "Inscription",
		subtitle: "Information sur le réprésentant",
		underStep: [
			{
				label: "Étape 1",
				fields: [
					"nomDuRéprésentant",
					"prenomDuRéprésentant",
					"adresseDuRéprésentant",
					"codePostalDuRéprésentant",
					"villeDuRéprésentant",
					"téléphoneDuRéprésentant",
				],
			},
		],
	},
	{
		label: "Étape 3",
		title: "Inscription",
		subtitle: "Détails de sécurité",
		underStep: [
			{
				label: "Étape 1",
				fields: [
					"emailDuRéprésentant",
					"motDePasse",
					"confirmationDeMotDePasse",
				],
			},
		],
	},
];

const transformData = (data) => {
	const transformedData = {
		raisonSocial: data.raisonSocial || "",
		entrepriseAdresse: data.adresse || "",
		entrepriseCodePostal: data.codePostal || "",
		entrepriseVille: data.ville || "",
		representantNom: data["nomDuRéprésentant"] || "",
		representantPrenom: data["prenomDuRéprésentant"] || "",
		representantEmail: data["emailDuRéprésentant"] || "",
		representantTel: data["téléphoneDuRéprésentant"] || "",
		representantVille: data["villeDuRéprésentant"] || "",
		representantCodePostal: data["codePostalDuRéprésentant"] || "",
		representantAdresse: data["adresseDuRéprésentant"] || "",
		password: data.motDePasse || "",
		isPasswordConfirmed: data.confirmationDeMotDePasse || "",
	};

	return transformedData;
};

export { steps, transformData };
