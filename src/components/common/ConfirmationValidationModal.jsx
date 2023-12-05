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
			<div className="column" style={{ padding: "10px 0px" }}>
				<p className="p-h2">Confirmer la validation</p>
				<p className="p-h3 text-center" style={{ color: "rgb(73 73 78)" }}>
					Êtes-vous sûr de vouloir accepter cet élément ?
				</p>
				<div className="justify-space-between">
					<button onClick={handleConfirmAccept} className="btn-secondary">
						Confirmer
					</button>
					<button onClick={onRequestClose} className="btn-primary">
						Annuler
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmationAcceptModal;
