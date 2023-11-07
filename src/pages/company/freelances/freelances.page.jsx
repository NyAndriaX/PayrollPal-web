import ComponentFreelancesTableList from "../../../components/company/freelances/component.freelances.table.list";
import { CompanyDashboardProvider } from "../../../context/company/dashboard/CompanyDashboardContext";

const FreelancesPageCompany = () => {
	return (
		<CompanyDashboardProvider>
			<ComponentFreelancesTableList />
		</CompanyDashboardProvider>
	);
};

export default FreelancesPageCompany;
