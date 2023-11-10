import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ComponentSettingsModalAdresseFreelance = ({
	isOpen,
	onRequestClose,
	onSubmit,
	user,
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
			<p className="p-h1">Adresse</p>
			<p className="p-h3 text-center">Editer mon profile</p>
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				<div>
					<p className="p-label">Adresse</p>
					<Controller
						name="adresse"
						control={control}
						defaultValue={user.adresse}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Adresse is required",
						}}
					/>
					{errors.adresse && (
						<p className="p-error">{errors.adresse.message}</p>
					)}
				</div>
				<div>
					<p className="p-label">Code postal</p>
					<Controller
						name="codePostal"
						control={control}
						defaultValue="code postal"
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Code postal is required",
						}}
					/>
					{errors.codePostal && (
						<p className="p-error">{errors.codePostal.message}</p>
					)}
				</div>
				<div>
					<p className="p-label">Ville</p>
					<Controller
						name="ville"
						control={control}
						defaultValue="ville"
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Ville is required",
						}}
					/>
					{errors.ville && <p className="p-error">{errors.ville.message}</p>}
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

export default ComponentSettingsModalAdresseFreelance;
