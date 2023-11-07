import { CompanyDashboardProvider } from "../../../context/company/dashboard/CompanyDashboardContext";
import ComponentDashboardCompany from "../../../components/company/dashboard/card/component.dashboard.card.company";
import ComponentDashboardTableListCompany from "../../../components/company/dashboard/table/component.dashboard.table.list.company";

const DahsboardPageCompany = () => {
	return (
		<CompanyDashboardProvider>
			<div className="column">
				<ComponentDashboardCompany />
				<ComponentDashboardTableListCompany />
			</div>
		</CompanyDashboardProvider>
	);
};

export default DahsboardPageCompany;
