import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ComponentModalRefusingCompany = ({
	isOpen,
	onRequestClose,
	onRefusing,
}) => {
	const handleConfirmRefusing = () => {
		onRefusing();
		onRequestClose();
	};
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation de refus"
			className="modal">
			<h2>Confirmer la refus</h2>
			<p>Êtes-vous sûr de vouloir refuser cet élément ?</p>
			<div className="justify-space-between">
				<button onClick={handleConfirmRefusing} className="btn-secondary">
					refuser
				</button>
				<button onClick={onRequestClose} className="btn-primary">
					Annuler
				</button>
			</div>
		</Modal>
	);
};

export default ComponentModalRefusingCompany;
