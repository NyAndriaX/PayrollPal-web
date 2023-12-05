import React from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import LoadingGif from "../../../../assets/loading-cercle-dots.gif";

Modal.setAppElement("#root");

const ComponentSettingsModalBanqueFreelance = ({
	isOpen,
	onRequestClose,
	onSubmit,
	errorRequest,
	infosUsers,
	isLoading,
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
			{errorRequest && (
				<p className="text-center p-label p-error">{errorRequest}</p>
			)}
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				<div>
					<p className={`p-label ${errors.iban ? "p-error" : ""}`}>IBAN</p>
					<Controller
						name="iban"
						control={control}
						defaultValue={infosUsers.iban}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "La code IBAN est requis.",
						}}
					/>
					{errors.iban && <p className="p-error">{errors.iban.message}</p>}
				</div>
				<div>
					<p className={`p-label ${errors.bic ? "p-error" : ""}`}>BIC</p>
					<Controller
						name="bic"
						control={control}
						defaultValue={infosUsers.bic}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "La code BIC est requis.",
						}}
					/>
					{errors.bic && <p className="p-error">{errors.bic.message}</p>}
				</div>
				<div>
					<p className={`p-label ${errors.banque ? "p-error" : ""}`}>
						Nom du banque
					</p>
					<Controller
						name="banque"
						control={control}
						defaultValue={infosUsers.banque}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Le nom du banque est requis.",
						}}
					/>
					{errors.banque && <p className="p-error">{errors.banque.message}</p>}
				</div>
				<div className="justify-space-between" style={{ marginTop: "15px" }}>
					<button
						onClick={handleConfirmAccept}
						className="btn-secondary"
						disabled={!isValid}>
						{isLoading ? (
							<img
								src={LoadingGif}
								alt="chargement..."
								style={{ width: "40px" }}
							/>
						) : (
							"Valider"
						)}
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
