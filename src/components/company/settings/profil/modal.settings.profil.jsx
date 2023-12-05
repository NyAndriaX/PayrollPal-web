import React from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import { ComponentModalSettingsProfilStyled } from "./component.modal.settings.profil.styled";
import LoadingGif from "../../../../assets/loading-cercle-dots.gif";

Modal.setAppElement("#root");

const ModalSettingsProfil = ({ isOpen, onRequestClose, onSubmit, user }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		getValues,
	} = useForm({ mode: "onChange" });
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorRequest, setErrorRequest] = React.useState("");

	const handleConfirmAccept = async () => {
		try {
			setIsLoading(true);
			const data = getValues();
			await onSubmit(data);
			onRequestClose();
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
		}
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
			<ComponentModalSettingsProfilStyled>
				<p className="p-h1">Profil</p>
				<p className="p-h3 text-center">Editer mon profile</p>
				{errorRequest && (
					<p className="text-center p-label p-error">{errorRequest}</p>
				)}
				<form onSubmit={handleSubmit(handleConfirmAccept)}>
					<div className="column">
						<div>
							<div className="inline-component-form">
								<div className="column-content-form">
									<p
										className={`p-label ${
											errors.representantNom ? "p-error" : ""
										}`}>
										Nom du réprésentant
									</p>
									<Controller
										name="representantNom"
										control={control}
										defaultValue={user.representantNom}
										render={({ field }) => (
											<input className="input input-inline" {...field} />
										)}
										rules={{
											required: "Le nom du representant est requis.",
										}}
									/>
									{errors.representantNom && (
										<p className="p-error no-height">
											{errors.representantNom.message}
										</p>
									)}
								</div>
								<div className="column-content-form">
									<p
										className={`p-label ${
											errors.representantPrenom ? "p-error" : ""
										}`}>
										Prenom du réprésentant
									</p>
									<Controller
										name="representantPrenom"
										control={control}
										defaultValue={user.representantPrenom}
										render={({ field }) => (
											<input className="input  input-inline" {...field} />
										)}
										rules={{
											required: "La prenom du réprésentant est requis.",
										}}
									/>
									{errors.representantPrenom && (
										<p className="p-error no-height">
											{errors.representantPrenom.message}
										</p>
									)}
								</div>
							</div>

							<div>
								<p
									className={`p-label ${
										errors.representantEmail ? "p-error" : ""
									}`}>
									Email du réprésentant
								</p>
								<Controller
									name="representantEmail"
									control={control}
									defaultValue={user.representantEmail}
									render={({ field }) => <input className="input" {...field} />}
									rules={{
										required: "L'email du réprésentant est requis.",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Cet email n'est pas valid.",
										},
									}}
								/>
								{errors.representantEmail && (
									<p className="p-error no-height">
										{errors.representantEmail.message}
									</p>
								)}
							</div>
							<div>
								<p
									className={`p-label ${
										errors.representantAdresse ? "p-error" : ""
									}`}>
									Adresse du réprésentant
								</p>

								<Controller
									name="representantAdresse"
									control={control}
									defaultValue={user.representantAdresse}
									render={({ field }) => (
										<input type="text" className="input" {...field} />
									)}
									rules={{
										required: "L'adresse du representant est requis.",
									}}
								/>
								{errors.representantAdresse && (
									<p className="p-error no-height">
										{errors.representantAdresse.message}
									</p>
								)}
							</div>
							<div className="inline-component-form">
								<div className="column-content-form">
									<p
										className={`p-label ${
											errors.representantCodePostal ? "p-error" : ""
										}`}>
										Code postal du réprésentant
									</p>
									<Controller
										name="representantCodePostal"
										control={control}
										defaultValue={user.representantCodePostal}
										render={({ field }) => (
											<input
												type="text"
												className="input  input-inline"
												{...field}
											/>
										)}
										rules={{
											required: "Le code postal du representant est requis.",
										}}
									/>
									{errors.representantCodePostal && (
										<p className="p-error no-height">
											{errors.representantCodePostal.message}
										</p>
									)}
								</div>
								<div className="column-content-form">
									<p
										className={`p-label ${
											errors.representantVille ? "p-error" : ""
										}`}>
										Ville du réprésentant
									</p>
									<Controller
										name="representantVille"
										control={control}
										defaultValue={user.representantVille}
										render={({ field }) => (
											<input
												type="text"
												className="input  input-inline"
												{...field}
											/>
										)}
										rules={{
											required: "La ville du representant est requis.",
										}}
									/>
									{errors.representantVille && (
										<p className="p-error no-height">
											{errors.representantVille.message}
										</p>
									)}
								</div>
							</div>
						</div>

						<div
							className="justify-space-between"
							style={{ marginTop: "10px" }}>
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
					</div>
				</form>
			</ComponentModalSettingsProfilStyled>
		</Modal>
	);
};

export default ModalSettingsProfil;
