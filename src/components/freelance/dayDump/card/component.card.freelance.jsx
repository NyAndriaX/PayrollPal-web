import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { ComponentCardFreelanceStyled } from "./component.card.freelance.styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDayDumpData } from "../../../../context/freelance/dayDump/dayDumpContext";

const ComponentCardFreelance = () => {
	const { dayDumpData, depositDayDump } = useDayDumpData();
	const { isDepositDayInThisMonth, placement, nbrDeJours } = dayDumpData;
	const [selectedDates, setSelectedDates] = useState([]);
	const [isDatePicker, setDatePicker] = useState(false);

	const isButtonDisabled =
		!placement || isDepositDayInThisMonth || new Date().getDate() !== 10;

	const handleCalendarButtonClick = () => {
		setDatePicker(true);
	};
	const handleSubmit = async () => {
		try {
			const nbrDeJours = selectedDates.length;
			const idPlacement = placement._id;
			const tjm = parseInt(placement.revenuMensuelFreelanceChasseur, 10);
			const data = {
				nbrDeJours,
				idPlacement,
				tjm,
			};
			await depositDayDump(data);
			setDatePicker(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ComponentCardFreelanceStyled>
			<div className="row">
				<div className="card">
					<p className="p-h3-secondary">Jours déposés</p>
					<div className="row-btn-2" style={{ gap: "20%" }}>
						<p className="p-indicateur-secondary">
							{nbrDeJours ? nbrDeJours : selectedDates.length}
						</p>
						<button
							className={`btn-secondary ${
								isButtonDisabled ? "btn-disabled" : ""
							}`}
							onClick={handleCalendarButtonClick}
							disabled={isButtonDisabled}>
							Déposer les jours du mois
						</button>
					</div>
					{isDatePicker && (
						<div className="react-datepicker-container">
							<DatePicker
								onChange={(date, event) => {
									if (event.ctrlKey) {
										setSelectedDates([...selectedDates, date[0]]);
									} else {
										console.log(date);
									}
								}}
								onKeyDown={(event) => {
									if (event.key === "Enter") {
										handleSubmit();
									}
								}}
								inline
								isClearable
								showMonthDropdown
								showYearDropdown
								dropdownMode="select"
								selectsRange
								highlightDates={selectedDates}
							/>
						</div>
					)}
				</div>
				<div className="card">
					<p className="p-h3">Contrat</p>
					<p className="p" style={{ color: "black" }}>
						Vous travaillez pour l'entreprise{" "}
						<span style={{ color: "#3650fb" }}>
							agriculture avec un TJM de 213£.
						</span>
					</p>
				</div>
				<div className="card" style={{ backgroundColor: "rgb(255, 249, 240)" }}>
					<p className="p-h3" style={{ color: "rgb(255,138,0)" }}>
						<FontAwesomeIcon icon={faBell} /> Attention
					</p>
					<p className="p">
						Vous ne pouvez pas déposer vos jours travaillés qu'au 25ème du mois.
					</p>
				</div>
			</div>
		</ComponentCardFreelanceStyled>
	);
};

export default ComponentCardFreelance;
