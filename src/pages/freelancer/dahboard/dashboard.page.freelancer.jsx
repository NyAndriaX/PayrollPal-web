import { DayDumpProvider } from "../../../context/freelance/dayDump/dayDumpContext";
import ComponentCardFreelance from "../../../components/freelance/dashboard/card/component.card.freelance";

const DashoardFreelancePage = () => {
	return (
		<DayDumpProvider>
			<div className="column">
				<ComponentCardFreelance />
			</div>
		</DayDumpProvider>
	);
};

export default DashoardFreelancePage;
