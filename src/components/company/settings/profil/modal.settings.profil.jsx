import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalSettingsProfil = ({ isOpen, onRequestClose, onSubmit, user }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		getValues,
	} = useForm({ mode: "onChange" });

	const handleConfirmAccept = () => {
		const data = getValues();
		onSubmit(data);
		onRequestClose();
	};
	const handleCancel = () => {
		reset();
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation d'acceptation"
			className="modal">
			<p className="p-h1">Profil</p>
			<p className="p-h3 text-center">Editer mon profile</p>
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				<div>
					<p className="p-label">Nom du representant</p>
					<Controller
						name="nomRepresentant"
						control={control}
						defaultValue={user.nomRepresentant}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Nom du representant is required",
						}}
					/>
					{errors.nomRepresentant && (
						<p className="p-error">{errors.nomRepresentant.message}</p>
					)}
				</div>
				<div>
					<p className="p-label">Prenom du representant</p>
					<Controller
						name="prenomRepresentant"
						control={control}
						defaultValue={user.prenomRepresentant}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "prenom du representant is required",
						}}
					/>
					{errors.prenomRepresentant && (
						<p className="p-error">{errors.prenomRepresentant.message}</p>
					)}
				</div>
				<div>
					<p className="p-label">Email du representant</p>
					<Controller
						name="emailRepresentant"
						control={control}
						defaultValue={user.emailRepresentant}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Email du representant is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email address",
							},
						}}
					/>
					{errors.emailRepresentant && (
						<p className="p-error">{errors.emailRepresentant.message}</p>
					)}
				</div>
				<p className="p-label">Adresse du representant</p>

				<Controller
					name="adresseRepresentant"
					control={control}
					defaultValue={user.adresseRepresentant}
					render={({ field }) => (
						<input type="text" className="input" {...field} />
					)}
				/>
				<div className="justify-space-between">
					<button
						onClick={handleConfirmAccept}
						className="btn-secondary"
						disabled={!isValid}>
						Confirmer
					</button>
					<button onClick={handleCancel} className="btn-primary">
						Annuler
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default ModalSettingsProfil;
