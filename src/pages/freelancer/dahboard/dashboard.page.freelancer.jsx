import { DayDumpProvider } from "../../../context/freelance/dayDump/dayDumpContext";
import ComponentLineChartDashboardFreelance from "../../../components/freelance/dashboard/lineChart/component.lineChart.dashboard.freelance";
import ComponentCardFreelance from "../../../components/freelance/dashboard/card/component.card.freelance";

const DashoardFreelancePage = () => {
	return (
		<DayDumpProvider>
			<div className="column">
				<ComponentCardFreelance />
				<ComponentLineChartDashboardFreelance />
			</div>
		</DayDumpProvider>
	);
};

export default DashoardFreelancePage;
