import React from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import LoadingGif from "../../../../assets/loading-cercle-dots.gif";
import { ComponentSettingsModalProfilFreelanceStyled } from "./component.settings.modal.profil.freelance.styled";

Modal.setAppElement("#root");

const ComponentSettingsModalProfilFreelance = ({
	errorRequest,
	isLoading,
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
			<ComponentSettingsModalProfilFreelanceStyled>
				<p className="p-h1">Profil</p>
				<p className="p-h3 text-center">Editer mon profile</p>
				{errorRequest && (
					<p className="text-center p-label p-error">{errorRequest}</p>
				)}
				<form onSubmit={handleSubmit(handleConfirmAccept)}>
					<div className="inline-component-form">
						<div className="column-content-form">
							<p className={`p-label ${errors.nom ? "p-error" : ""}`}>Nom</p>
							<Controller
								name="nom"
								control={control}
								defaultValue={user.nom}
								render={({ field }) => (
									<input className="input input-inline" {...field} />
								)}
								rules={{
									required: "Le nom est requis.",
								}}
							/>
							{errors.nom && (
								<p className="p-error no-height">{errors.nom.message}</p>
							)}
						</div>
						<div className="column-content-form">
							<p className={`p-label ${errors.prenom ? "p-error" : ""}`}>
								Prenom
							</p>
							<Controller
								name="prenom"
								control={control}
								defaultValue={user.prenom}
								render={({ field }) => (
									<input className="input input-inline" {...field} />
								)}
								rules={{
									required: "prenom is required",
								}}
							/>
							{errors.prenom && (
								<p className="p-error no-height">{errors.prenom.message}</p>
							)}
						</div>
					</div>

					<div>
						<p className="p-label">Email</p>
						<Controller
							name="email"
							control={control}
							defaultValue={user.email}
							render={({ field }) => <input className="input" {...field} />}
							rules={{
								required: "Email is required",
								pattern: {
									value: /^\S+@\S+$/i,
									message: "Cet email n'est pas valid.",
								},
							}}
						/>
						{errors.email && (
							<p className="p-error no-height">{errors.email.message}</p>
						)}
					</div>

					<div className="column-content-form">
						<p className={`p-label ${errors.adresse ? "p-error" : ""}`}>
							Adresse
						</p>
						<Controller
							name="adresse"
							control={control}
							defaultValue={user.adresse}
							render={({ field }) => (
								<input className="input input-inline" {...field} />
							)}
							rules={{
								required: "L'adresse est requis.",
							}}
						/>
						{errors.adresse && (
							<p className="p-error no-height">{errors.adresse.message}</p>
						)}
					</div>

					<div className="inline-component-form">
						<div className="column-content-form">
							<p className={`p-label ${errors.codePostal ? "p-error" : ""}`}>
								Code postal
							</p>
							<Controller
								name="codePostal"
								control={control}
								defaultValue={user.codePostal}
								render={({ field }) => (
									<input className="input input-inline" {...field} />
								)}
								rules={{
									required: "Le code postal est requis.",
								}}
							/>
							{errors.codePostal && (
								<p className="p-error no-height">{errors.codePostal.message}</p>
							)}
						</div>
						<div className="column-content-form">
							<p className={`p-label ${errors.ville ? "p-error" : ""}`}>
								Ville
							</p>
							<Controller
								name="ville"
								control={control}
								defaultValue={user.ville}
								render={({ field }) => (
									<input className="input input-inline" {...field} />
								)}
								rules={{
									required: "Le nom du  ville est requis.",
								}}
							/>
							{errors.ville && (
								<p className="p-error no-height">{errors.ville.message}</p>
							)}
						</div>
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
			</ComponentSettingsModalProfilFreelanceStyled>
		</Modal>
	);
};

export default ComponentSettingsModalProfilFreelance;
