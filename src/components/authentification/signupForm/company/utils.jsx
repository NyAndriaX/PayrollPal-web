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
		adresseEntreprise: data.adresseDeLEntreprise || "",
		numeroIdentificationFiscale: data.numeroDIdentificationFiscal || "",
		nomRepresentant: data.nomDuRepresentant || "",
		emailRepresentant: data.emailDuRepresentant || "",
		prenomRepresentant: data.prenomDuRepresentant || "",
		telRepresentant: data.téléphoneDuRepresentant || "",
		adresseRepresentant: data.adresseDuRepresentant || "",
		password: data.motDePasse || "",
		isPasswordConfirmed: data.confirmationDeMotDePasse || "",
	};

	return transformedData;
};

export { steps, transformData };
