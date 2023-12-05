import { useCompanyDashboardData } from "../../../../context/company/dashboard/CompanyDashboardContext";
import { useNavigate } from "react-router-dom";

const ComponentDashboardCompany = () => {
	const navigate = useNavigate();
	const { companyData } = useCompanyDashboardData();
	const { nbrFreelancer, nrbDayValidity } = companyData;
	return (
		<>
			<div className="justify-space-between">
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3 text-center">Nombre des Freelances</p>
					<p
						className="p-indicateur-primary text-center"
						style={{ color: "black", fontFamily: "Multer" }}>
						{nbrFreelancer}
					</p>
				</div>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3-secondary">Jours à valider</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">{nrbDayValidity}</p>
						<button
							className="btn-secondary"
							onClick={() => navigate("/Validation%20des%20jours")}>
							valider les jours
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default ComponentDashboardCompany;
