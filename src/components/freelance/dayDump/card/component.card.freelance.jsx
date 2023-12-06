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
		!placement || isDepositDayInThisMonth || new Date().getDate() === 10;

	const handleCalendarButtonClick = () => {
		setDatePicker(true);
	};
	const handleSubmit = async () => {
		try {
			const nbrDeJours = selectedDates.length;
			const idPlacement = placement._id;
			const tjm = parseInt(placement.tjm, 10);
			const data = {
				nbrDeJours,
				idPlacement,
				tjm,
			};
			await depositDayDump(data);
			setSelectedDates([]);
			setDatePicker(false);
		} catch (error) {
			throw error;
		}
	};
	const handleCancel = async () => {
		setSelectedDates([]);
		setDatePicker(false);
	};

	const handleDateChange = (dates, event) => {
		if (!Array.isArray(dates) || dates.length === 0) {
			return;
		}

		const date = dates[0];

		const isDateSelected = selectedDates.some(
			(selectedDate) =>
				selectedDate && date.getTime() === selectedDate.getTime()
		);

		const updatedDates = selectedDates.filter(
			(selectedDate) =>
				selectedDate && date && date.getTime() !== selectedDate.getTime()
		);

		if (isDateSelected) {
			setSelectedDates(updatedDates);
		} else {
			setSelectedDates([...selectedDates, date]);
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
							<div>
								<DatePicker
									selected={null}
									onChange={handleDateChange}
									inline
									isClearable
									showMonthDropdown
									showYearDropdown
									dropdownMode="select"
									selectsRange
									highlightDates={selectedDates}
								/>
							</div>
							<div className="react-datepicker-container-btn">
								<button onClick={handleSubmit}>Valider</button>
								<button onClick={handleCancel}>Annuler</button>
							</div>
						</div>
					)}
				</div>
				<div className="card">
					<p className="p-h3">Contrat</p>
					{placement ? (
						<div>
							<p className="p" style={{ color: "black" }}>
								Vous travaillez pour l'entreprise{" "}
								<span style={{ color: "#3650fb" }}>
									{placement?.entreprise.raisonSocial} avec un TJM de{" "}
									{placement?.tjm} Arriary.
								</span>
							</p>
						</div>
					) : (
						<p className="p">
							vous n'êtes pas encore dans une entreprise actuellement.
						</p>
					)}
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
