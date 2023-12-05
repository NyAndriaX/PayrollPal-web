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
			<div className="column" style={{ padding: "10px 0px" }}>
				<p className="p-h2">Confirmer la suppression</p>
				<p className="p-h3 text-center" style={{ color: "rgb(73 73 78)" }}>
					Êtes-vous sûr de vouloir supprimer cet élément ?
				</p>
				<div className="justify-space-between">
					<button onClick={handleConfirmDelete} className="btn-secondary">
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

export default ConfirmationDeleteModal;
