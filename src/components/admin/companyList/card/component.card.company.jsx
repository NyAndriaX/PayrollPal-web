import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ComponentModalFormCompany from "./component.modal.form.company";

const ComponentCardCompany = () => {
	const [isOpenModalFormCompany, setOpenModalFormCompany] =
		React.useState(false);

	const onSubmit = (data) => {
		console.log(data);
	};

	const openModalFormCompany = () => {
		setOpenModalFormCompany(true);
	};

	const closeOpenModalFormCompany = () => {
		setOpenModalFormCompany(false);
	};

	return (
		<>
			<div className="row">
				<div className="card" style={{ backgroundColor: "rgb(255 249 240)" }}>
					<p className="p-h3" style={{ color: "#ff8a00" }}>
						<FontAwesomeIcon icon={faBell} /> À connaître
					</p>
					<p className="p">
						Boostez votre entreprise avec FreelPay : des talents freelance, des
						solutions professionnelles
					</p>
				</div>
				<div className="card">
					<p className="p-h3-secondary">Nombre des entreprise</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">0</p>
						<button className="btn-secondary" onClick={openModalFormCompany}>
							Creer un entreprise
						</button>
					</div>
				</div>
			</div>
			<ComponentModalFormCompany
				isOpen={isOpenModalFormCompany}
				onRequestClose={closeOpenModalFormCompany}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default ComponentCardCompany;
