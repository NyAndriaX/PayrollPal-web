import React from "react";
import { ComponentCardFreelanceDashboardStyled } from "./component.card.freelance.dashboard.styled";
import { useDayDumpData } from "../../../../context/freelance/dayDump/dayDumpContext";
import { useNavigate } from "react-router-dom";

const ComponentCardFreelance = () => {
	const { dayDumpData } = useDayDumpData();
	const { isDepositDayInThisMonth, placement, nbrDeJours, alldayDump } =
		dayDumpData;

	const navigate = useNavigate();

	const isButtonDisabled =
		!placement || isDepositDayInThisMonth || new Date().getDate() !== 10;

	return (
		<ComponentCardFreelanceDashboardStyled>
			<div className="justify-space-between" style={{ alignItems: "stretch" }}>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3">Contrat</p>
					{placement ? (
						<div>
							<p className="p" style={{ color: "black" }}>
								vous travaillez pour l'entreprise{" "}
								<span style={{ color: "#3650fb" }}>
									{placement?.entreprise.raisonSocial}.
								</span>
							</p>
							<p className="p" style={{ color: "black" }}>
								Votre taux journalier moyen est de{" "}
								<span style={{ color: "#3650fb" }}>
									{placement?.tjm || ""} Arriary.
								</span>
							</p>
						</div>
					) : (
						<p className="p">
							vous n'êtes pas encore dans une entreprise actuellement.
						</p>
					)}
				</div>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3-secondary">Jours déposés</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">{nbrDeJours}</p>
						<button
							className={`btn-secondary ${
								isButtonDisabled ? "btn-disabled" : ""
							}`}
							disabled={isButtonDisabled}
							onClick={() => navigate("/Dépôt%20des%20jours")}>
							Déposer les jours du mois
						</button>
					</div>
				</div>
			</div>
		</ComponentCardFreelanceDashboardStyled>
	);
};
export default ComponentCardFreelance;
