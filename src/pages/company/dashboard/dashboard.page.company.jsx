import { CompanyDashboardProvider } from "../../../context/company/dashboard/CompanyDashboardContext";
import ComponentLineChartDashboardCompany from "../../../components/company/dashboard/lineChart/component.lineChart.company";
import ComponentDashboardCompany from "../../../components/company/dashboard/card/component.dashboard.card.company";
import ComponentDashboardTableListCompany from "../../../components/company/dashboard/table/component.dashboard.table.list.company";

const DahsboardPageCompany = () => {
	return (
		<CompanyDashboardProvider>
			<div className="column">
				<ComponentDashboardCompany />
				<ComponentLineChartDashboardCompany />
				<ComponentDashboardTableListCompany />
			</div>
		</CompanyDashboardProvider>
	);
};

export default DahsboardPageCompany;
