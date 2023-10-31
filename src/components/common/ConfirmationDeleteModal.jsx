import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ConfirmationDeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
	const handleConfirmDelete = () => {
		onDelete();
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation de suppression"
			className="modal">
			<h2>Confirmer la suppression</h2>
			<p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
			<div className="justify-space-between">
				<button onClick={handleConfirmDelete} className="btn-secondary">
					Confirmer
				</button>
				<button onClick={onRequestClose} className="btn-primary">
					Annuler
				</button>
			</div>
		</Modal>
	);
};

export default ConfirmationDeleteModal;
