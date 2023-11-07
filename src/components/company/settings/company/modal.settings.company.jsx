import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalSettingsCompany = ({ isOpen, onRequestClose, onSubmit, user }) => {
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
			<p className="p-h1">Entreprise</p>
			<p className="p-h3 text-center">Editer mon entreprise</p>
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				<div>
					<p className="p-label">Raison social</p>
					<Controller
						name="raisonSocial"
						control={control}
						defaultValue={user.raisonSocial}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Raison social is required",
						}}
					/>
					{errors.raisonSocial && (
						<p className="p-error">{errors.raisonSocial.message}</p>
					)}
				</div>
				<div>
					<p className="p-label">Numeros d'identification fiscale</p>
					<Controller
						name="numeroIdentificationFiscale"
						control={control}
						defaultValue={user.numeroIdentificationFiscale}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Numeros d'identification fiscale is required",
						}}
					/>
					{errors.numeroIdentificationFiscale && (
						<p className="p-error">
							{errors.numeroIdentificationFiscale.message}
						</p>
					)}
				</div>
				<div>
					<p className="p-label">Adresse de l'entreprise</p>
					<Controller
						name="adresseEntreprise"
						control={control}
						defaultValue={user.adresseEntreprise}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Adresse de l'entreprise is required",
						}}
					/>
					{errors.adresseEntreprise && (
						<p className="p-error">{errors.adresseEntreprise.message}</p>
					)}
				</div>
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

export default ModalSettingsCompany;
