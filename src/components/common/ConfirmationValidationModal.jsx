import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ConfirmationAcceptModal = ({ isOpen, onRequestClose, onAccept }) => {
	const handleConfirmAccept = () => {
		onAccept();
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation d'acceptation"
			className="modal">
			<h2>Confirmer l'acceptation</h2>
			<p>Êtes-vous sûr de vouloir accepter cet élément ?</p>
			<div className="justify-space-between">
				<button onClick={handleConfirmAccept} className="btn-secondary">
					Confirmer
				</button>
				<button onClick={onRequestClose} className="btn-primary">
					Annuler
				</button>
			</div>
		</Modal>
	);
};

export default ConfirmationAcceptModal;
