import React from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import { ComponentModalSettingsCompanyStyled } from "./component.modal.settings.company.styled";
import LoadingGif from "../../../../assets/loading-cercle-dots.gif";

Modal.setAppElement("#root");

const ModalSettingsCompany = ({ isOpen, onRequestClose, onSubmit, user }) => {
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
			<ComponentModalSettingsCompanyStyled>
				<p className="p-h1">Entreprise</p>
				<p className="p-h3 text-center">Editer mon entreprise</p>
				{errorRequest && (
					<p className="text-center p-label p-error">{errorRequest}</p>
				)}
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
							<p className="p-error  no-height">
								{errors.raisonSocial.message}
							</p>
						)}
					</div>
					<div>
						<p className="p-label">Adresse</p>
						<Controller
							name="entrepriseAdresse"
							control={control}
							defaultValue={user.entrepriseAdresse}
							render={({ field }) => <input className="input" {...field} />}
							rules={{
								required: "L'adresse de l'entreprise est requis",
							}}
						/>
						{errors.entrepriseAdresse && (
							<p className="p-error  no-height">
								{errors.entrepriseAdresse.message}
							</p>
						)}
					</div>
					<div className="inline-component-form">
						<div className="column-content-form">
							<p
								className={`p-label ${
									errors.entrepriseCodePostal ? "p-error" : ""
								}`}>
								Code postal
							</p>
							<Controller
								name="entrepriseCodePostal"
								control={control}
								defaultValue={user.entrepriseCodePostal}
								render={({ field }) => (
									<input className="input  input-inline" {...field} />
								)}
								rules={{
									required: "La code postal de l'entreprise est requis.",
								}}
							/>
							{errors.entrepriseCodePostal && (
								<p className="p-error  no-height">
									{errors.entrepriseCodePostal.message}
								</p>
							)}
						</div>
						<div className="column-content-form">
							<p className="p-label">Ville</p>
							<Controller
								name="entrepriseVille"
								control={control}
								defaultValue={user.entrepriseVille}
								render={({ field }) => (
									<input className="input  input-inline" {...field} />
								)}
								rules={{
									required: "La ville l'entreprise est requis.",
								}}
							/>
							{errors.entrepriseVille && (
								<p className="p-error  no-height">
									{errors.entrepriseVille.message}
								</p>
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
			</ComponentModalSettingsCompanyStyled>
		</Modal>
	);
};

export default ModalSettingsCompany;
