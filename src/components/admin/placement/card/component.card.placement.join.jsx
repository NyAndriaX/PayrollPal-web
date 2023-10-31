import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { ComponentCardPlacementJoinStyled } from "./component.card.placement.join.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import DynamicSelect from "../../../common/dynamicSelect";

const ComponentCardPlacementJoin = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<ComponentCardPlacementJoinStyled>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="content-placement">
					<div className="content-freelance" style={{ flex: 1 }}>
						<p className="p-h3" style={{ color: "#363740" }}>
							Freelances
						</p>
						<div className="form">
							<div>
								<p className="p-label">Freelance</p>
								<Controller
									name="Freelance"
									control={control}
									rules={{ required: "Ce champ est  requis" }}
									render={({ field }) => (
										<>
											<DynamicSelect
												data={[
													{ id: 1, nom: "Doe", prenom: "John" },
													{ id: 2, nom: "Smith", prenom: "Jane" },
												]}
												onSelect={(selectedOption) =>
													field.onChange(selectedOption)
												}
											/>
											{errors.Freelance && (
												<span className="p-error">
													{errors.Freelance.message}
												</span>
											)}
										</>
									)}
								/>
							</div>
							<div>
								<p className="p-label">Freelance chasseur</p>
								<Controller
									name="FreelanceChasseur"
									control={control}
									rules={{ required: "Ce champ est  requis" }}
									render={({ field }) => (
										<>
											<DynamicSelect
												data={[
													{ id: 1, nom: "Doe", prenom: "John" },
													{ id: 2, nom: "Smith", prenom: "Jane" },
												]}
												onSelect={(selectedOption) =>
													field.onChange(selectedOption)
												}
											/>
											{errors.FreelanceChasseur && (
												<span className="p-error">
													{errors.FreelanceChasseur.message}
												</span>
											)}
										</>
									)}
								/>
							</div>
							<div>
								<p className="p-label">Revenu du freelance chasseur</p>
								<Controller
									name="FreelanceChasseurRevenu"
									control={control}
									rules={{ required: "Ce champ est  requis" }}
									render={({ field }) => (
										<>
											<input className="input" {...field} />
											{errors.FreelanceChasseurRevenu && (
												<span className="p-error">
													{errors.FreelanceChasseurRevenu.message}
												</span>
											)}
										</>
									)}
								/>
							</div>
						</div>
					</div>
					<div className="icon-join">
						<FontAwesomeIcon icon={faPersonWalkingLuggage} />
					</div>
					<div className="content-company" style={{ flex: 1 }}>
						<p className="p-h3" style={{ color: "#363740" }}>
							Entreprises
						</p>
						<div className="form">
							<div>
								<p className="p-label">Entreprises</p>
								<Controller
									name="Entreprise"
									control={control}
									rules={{ required: "Ce champ est  requis" }}
									render={({ field }) => (
										<>
											<DynamicSelect
												data={[{ id: 1, raisonSocial: "John" }]}
												onSelect={(selectedOption) =>
													field.onChange(selectedOption)
												}
											/>
											{errors.Entreprise && (
												<span className="p-error">
													{errors.Entreprise.message}
												</span>
											)}
										</>
									)}
								/>
							</div>
							<div>
								<div
									style={{
										boxShadow: "0px 0px 1px 1px #eaeaea",
										marginTop: "12px",
										padding: "20px",
										borderRadius: "8px",
										backgroundColor: "rgb(255, 249, 240)",
									}}>
									<p
										className="p-h3"
										style={{ color: "rgb(255, 138, 0)", fontWeight: 700 }}>
										N.B: Résumer du placement
									</p>
									<p className="p">
										Boostez votre entreprise avec FreelPay :{" "}
										<span style={{ color: "blue", fontWeight: 700 }}>245£</span>{" "}
										des talents freelance, des solutions professionnelles
									</p>
								</div>
							</div>
						</div>
						<div style={{ marginTop: "12px" }}>
							<button className="btn-secondary" onClick={handleSubmit}>
								Join
							</button>
						</div>
					</div>
				</div>
			</form>
		</ComponentCardPlacementJoinStyled>
	);
};

export default ComponentCardPlacementJoin;
