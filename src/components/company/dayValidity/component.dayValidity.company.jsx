import React from "react";
import ComponentModalRefusingCompany from "./component.modal.dayRefusing.company";
import ComponentModalDayValiditionCompany from "./component.modal.dayValidation.company";

const ComponentDayValidityCompany = ({
	key,
	item,
	validationDayDump,
	refusDayDump,
}) => {
	const idDayDump = item._doc?._id;
	const idPlacement = item._doc?.idPlacement;
	const [isOpenModalRefusing, setOpenModalRefusing] = React.useState(false);
	const [isOpenModalValidation, setOpenModalValidation] = React.useState(false);

	const openModalRefusing = () => {
		setOpenModalRefusing(true);
	};
	const closeModalRefusing = () => {
		setOpenModalRefusing(false);
	};
	const onRefusing = async () => {
		try {
			await refusDayDump(idDayDump, idPlacement);
		} catch (error) {
			console.log(error);
		}
	};

	const onValidation = async () => {
		try {
			await validationDayDump(idDayDump, idPlacement);
		} catch (error) {
			console.log(error);
		}
	};

	const openModalValidation = () => {
		setOpenModalValidation(true);
	};

	const closeModalValidation = () => {
		setOpenModalValidation(false);
	};
	const status = item._doc?.isValid;
	const dateObj = new Date(item._doc?.createdAt);
	const nomsMois = [
		"Janvier",
		"Février",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Août",
		"Septembre",
		"Octobre",
		"Novembre",
		"Décembre",
	];
	const mois = nomsMois[dateObj.getMonth()];
	return (
		<>
			<div className="card" key={key}>
				<div style={{ marginBottom: "1rem" }}>
					<p className="p-h3 text-center" style={{ color: "black" }}>
						{item.freelanceDetails?.nom}
					</p>
					<p className="p-h3 text-center">{item.freelanceDetails?.prenom}</p>
				</div>
				<p>Mois: {mois}</p>
				<p>Nb de jours : {item._doc?.nbrDeJours}</p>
				<p>Total à régler : {item._doc?.TotalARegler} Arriary</p>

				{status === "waiting" ? (
					<div className="justify-space-between" style={{ marginTop: "1rem" }}>
						<button
							className="btn-secondary"
							style={{ flex: 1 }}
							onClick={openModalValidation}>
							Valider les jours
						</button>
						<button
							className="btn-primary"
							style={{ flex: 1 }}
							onClick={openModalRefusing}>
							Refuser les jours
						</button>
					</div>
				) : status === "valid" ? (
					<div style={{ marginTop: "1rem" }}>
						<button
							className="btn-secondary"
							style={{
								width: "48%",
								backgroundColor: "rgb(128 200 95)",
							}}>
							jours validé
						</button>
					</div>
				) : (
					<div style={{ marginTop: "1rem" }}>
						<button
							className="btn-secondary"
							style={{
								width: "48%",
								backgroundColor: "#fff9f0",
								color: "#fd9821",
							}}>
							jours réfusés
						</button>
					</div>
				)}
			</div>
			<ComponentModalRefusingCompany
				isOpen={isOpenModalRefusing}
				onRequestClose={closeModalRefusing}
				onRefusing={onRefusing}
			/>
			<ComponentModalDayValiditionCompany
				isOpen={isOpenModalValidation}
				onRequestClose={closeModalValidation}
				onValidation={onValidation}
			/>
		</>
	);
};

export default ComponentDayValidityCompany;
