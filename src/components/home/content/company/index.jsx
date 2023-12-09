import SectionCompanyListCard from "./card/section.company.card.list";

const ComponentSectionCompanyTabs = () => {
	return (
		<div className="column" style={{ margin: "2rem auto" }}>
			<div>
				<p className="p-h1">Explorer des entreprises inspirantes</p>
				<p className="p-h2">
					Découvrez les coulisses de votre futur entreprise.
				</p>
			</div>

			<SectionCompanyListCard />
			<div style={{ display: "flex", justifyContent: "center" }}>
				<button className="btn-secondary" style={{ width: "50%" }}>
					Explorer plus d'entreprise
				</button>
			</div>
		</div>
	);
};

export default ComponentSectionCompanyTabs;
