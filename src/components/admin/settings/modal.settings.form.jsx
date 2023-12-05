import React from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import LoadingGif from "../../../assets/loading-cercle-dots.gif";

Modal.setAppElement("#root");

const SettingsFormModal = ({
	isOpen,
	isLoading,
	errorRequest,
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
			{errorRequest && (
				<p className="text-center p-label p-error">{errorRequest}</p>
			)}
			<form onSubmit={handleSubmit(handleConfirmAccept)}>
				<div className="data-ignores">
					<Controller
						name="_id"
						control={control}
						defaultValue={user._id}
						render={({ field }) => (
							<input type="hidden" className="input" {...field} />
						)}
					/>
				</div>
				<div>
					<p className={`p-label ${errors.nom ? "p-error" : ""}`}>Nom</p>
					<Controller
						name="nom"
						control={control}
						defaultValue={user.nom}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Nom is required",
						}}
					/>
					{errors.nom && <p className="p-error">{errors.nom.message}</p>}
				</div>
				<div>
					<p className={`p-label ${errors.prenom ? "p-error" : ""}`}>Prenom</p>
					<Controller
						name="prenom"
						control={control}
						defaultValue={user.prenom}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "prenom is required",
						}}
					/>
					{errors.prenom && <p className="p-error">{errors.prenom.message}</p>}
				</div>
				<div>
					<p className={`p-label ${errors.email ? "p-error" : ""}`}>Email</p>
					<Controller
						name="email"
						control={control}
						defaultValue={user.email}
						render={({ field }) => <input className="input" {...field} />}
						rules={{
							required: "Email is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email address",
							},
						}}
					/>
					{errors.email && <p className="p-error">{errors.email.message}</p>}
				</div>
				<p className="p-label">Roles</p>

				<Controller
					name="roles"
					control={control}
					defaultValue={user.roles}
					render={({ field }) => (
						<input type="text" disabled className="input" {...field} />
					)}
				/>
				<div className="justify-space-between">
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

export default SettingsFormModal;
