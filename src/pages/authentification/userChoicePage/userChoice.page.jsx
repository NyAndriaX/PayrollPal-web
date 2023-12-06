import CardSignUpCompany from "../../../components/authentification/userChoice/cardSignUpCompany";
import CardSignUpFreelance from "../../../components/authentification/userChoice/cardSignUpFreelance";

const UserChoicePage = () => {
	return (
		<div className="column">
			<div className="contentTheme" style={{ marginBottom: "4rem" }}>
				<div className="bg-logo">
					<h1 className="logo">P</h1>
				</div>
				<p className="p-h2">Payrollpal</p>
			</div>
			<div className="row-card-2">
				<CardSignUpCompany />
				<CardSignUpFreelance />
			</div>
		</div>
	);
};

export default UserChoicePage;
