import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ComponentModalFormCompany from "./component.modal.form.company";
import { useCompanyData } from "../../../../context/admin/company/companyContext";

const ComponentCardCompany = () => {
	const { data, createNewCompany } = useCompanyData();
	const { nbrCompany } = data;
	const [isLoading, setLoading] = React.useState(false);
	const [isOpenModalFormCompany, setOpenModalFormCompany] =
		React.useState(false);

	const transformData = (data) => ({
		raisonSocial: data.raisonSocial || "",
		adresseEntreprise: data.adresseDeLEntreprise || "",
		numeroIdentificationFiscale: data.numeroDIdentificationFiscal || "",
		nomRepresentant: data.nomDuRepresentant || "",
		prenomRepresentant: data.prenomDuRepresentant || "",
		emailRepresentant: data.emailDuRepresentant || "",
		telRepresentant: data.téléphoneDuRepresentant || "",
		adresseRepresentant: data.adresseDuRepresentant || "",
	});

	const onSubmit = async (data) => {
		const formData = transformData(data);
		try {
			setLoading(true);
			await createNewCompany(formData);
			setLoading(false);
			setOpenModalFormCompany(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	const openModalFormCompany = () => {
		setOpenModalFormCompany(true);
	};
	const closeOpenModalFormCompany = () => {
		setOpenModalFormCompany(false);
	};

	return (
		<>
			<div className="justify-space-between" style={{ alignItems: "stretch" }}>
				<div
					className="card"
					style={{ backgroundColor: "rgb(255 249 240)", maxWidth: "initial" }}>
					<p className="p-h3" style={{ color: "#ff8a00" }}>
						<FontAwesomeIcon icon={faBell} /> À connaître
					</p>
					<p className="p">
						Boostez votre entreprise avec FreelPay : des talents freelance, des
						solutions professionnelles
					</p>
				</div>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3-secondary">Nombre des entreprise</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">{nbrCompany}</p>
						<button className="btn-secondary" onClick={openModalFormCompany}>
							Creer un entreprise
						</button>
					</div>
				</div>
			</div>
			<ComponentModalFormCompany
				isLoading={isLoading}
				isOpen={isOpenModalFormCompany}
				onRequestClose={closeOpenModalFormCompany}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default ComponentCardCompany;
