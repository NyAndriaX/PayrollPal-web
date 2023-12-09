const CompanyCard = ({ company }) => (
	<div className="company-card">
		<div className="company-card-img">
			<img
				className="company-img-couverture"
				src={company.couverture}
				alt="Couverture"
			/>
			<img className="company-img-profil" src={company.profil} alt="Profil" />
		</div>
		<div className="company-card-info">
			<p className="p-h2">{company.domaines}</p>
			<p className="p">Nombre de salariés: {company.nbrDeSalariees}</p>
			<p className="p">Adresse: {company.adresse}</p>
			<p className="p">Nombre d'offres: {company.offres}</p>
			<p className="p-description">{company.description}</p>
		</div>
	</div>
);

export default CompanyCard;
