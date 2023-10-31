import { ComponentCardSstyled } from "./component.card.styled";

const ComponentCard = () => {
	return (
		<ComponentCardSstyled>
			<div className="row">
				<div className="card">
					<p className="p-title-2">Contrat</p>
					<p className="p-p">
						Vous travailler pour l'entreprise{" "}
						<span className="p-em">agriculture.</span>
					</p>
					<p className="p-p">
						Votre taux journalier moyen est de{" "}
						<span className="p-em">213£</span>
					</p>
				</div>
				<div className="card">
					<p className="p-title-2-secondary">Jour déposés</p>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<p className="p-indicateur-secondary">0</p>
						<button className="btn-secondary">Déposer les jours du mois</button>
					</div>
				</div>
			</div>
		</ComponentCardSstyled>
	);
};

export default ComponentCard;
