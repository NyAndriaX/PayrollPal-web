import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ComponentSettingsModalBanqueFreelance = ({
	isOpen,
	onRequestClose,
	onSubmit,
	informationsBancaires,
}) => {
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
			<p className="p-h1">Information Bancaires</p>
			<p className="p-h3 text-center">Editer mon information bancaire</p>
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				<div>
					<p className="p-label">IBAN</p>
					<Controller
						name="IBAN"
						control={control}
						defaultValue={informationsBancaires.IBAN}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "IBAN is required",
						}}
					/>
					{errors.IBAN && <p className="p-error">{errors.IBAN.message}</p>}
				</div>
				<div>
					<p className="p-label">BIG</p>
					<Controller
						name="BIC"
						control={control}
						defaultValue={informationsBancaires.BIC}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "BIC is required",
						}}
					/>
					{errors.BIC && <p className="p-error">{errors.BIC.message}</p>}
				</div>
				<div>
					<p className="p-label">Nom titulaire</p>
					<Controller
						name="nomTitulaire"
						control={control}
						defaultValue={informationsBancaires.nomTitulaire}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Nom titulaire is required",
						}}
					/>
					{errors.nomTitulaire && (
						<p className="p-error">{errors.nomTitulaire.message}</p>
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

export default ComponentSettingsModalBanqueFreelance;
