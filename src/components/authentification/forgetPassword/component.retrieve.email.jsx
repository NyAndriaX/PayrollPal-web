import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import LoadingGif from "../../../assets/loading-cercle-dots.gif";
import { useUserData } from "../../../context/authentification/userContext";

const ComponentRetrieveEmail = ({ nexStep, setForm }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		getValues,
	} = useForm({ mode: "onChange" });
	const navigate = useNavigate();
	const { generateAndSendResetToken } = useUserData();
	const [errorRequest, setErrorRequest] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	const handleSubmitToken = async (e) => {
		try {
			setIsLoading(true);
			setErrorRequest("");
			await generateAndSendResetToken(e.email);
			setForm((prevForm) => ({
				...prevForm,
				email: e.email,
			}));
			nexStep();
		} catch (error) {
			setErrorRequest(
				error.response?.data.message || "Une erreur s'est produite."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitToken)}>
			{errorRequest && (
				<p className="text-center p-label p-error">{errorRequest}</p>
			)}
			<p className={` p-label ${errors["email"] ? "p-error" : ""}`}>Email</p>

			<Controller
				name="email"
				control={control}
				rules={{
					required: `Ce champ est requis`,
					...("email" === "email" && {
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Ce champ doit être une adresse e-mail valide",
						},
					}),
				}}
				render={({ field }) => (
					<>
						<input
							type="email"
							className={`input ${errors["email"] ? "input-error" : ""}`}
							{...field}
						/>
						{errors["email"] && (
							<span className="p-error">{errors["email"].message}</span>
						)}
					</>
				)}
			/>
			<button type="submit" className="btn-secondary">
				{isLoading ? (
					<img src={LoadingGif} alt="chargement..." style={{ width: "40px" }} />
				) : (
					"Continuer"
				)}
			</button>
			<p className="p-h3 text-center">
				Pas inscrit ?{" "}
				<span className="p-a" onClick={() => navigate("/signup")}>
					S'inscrire
				</span>
			</p>
		</form>
	);
};
export default ComponentRetrieveEmail;
