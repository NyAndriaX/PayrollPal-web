import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ComponentModalDayValiditionCompany = ({
	isOpen,
	onRequestClose,
	onValidation,
}) => {
	const handleConfirmValidation = () => {
		onValidation();
		onRequestClose();
	};
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation de validation"
			className="modal">
			<h2>Confirmer la validation</h2>
			<p>Êtes-vous sûr de vouloir valider cet élément ?</p>
			<div className="justify-space-between">
				<button onClick={handleConfirmValidation} className="btn-secondary">
					Valider
				</button>
				<button onClick={onRequestClose} className="btn-primary">
					Annuler
				</button>
			</div>
		</Modal>
	);
};

export default ComponentModalDayValiditionCompany;
