import ComponentCardFreelance from "../../../components/freelance/dayDump/card/component.card.freelance";
import ComponentLineChartDayDumpFreelance from "../../../components/freelance/dayDump/lineChart/component.lineChart.dayDump.freelance";
import { DayDumpProvider } from "../../../context/freelance/dayDump/dayDumpContext.jsx";

const DayDumpPageFreelance = () => {
	return (
		<DayDumpProvider>
			<div className="column">
				<ComponentCardFreelance />
				<ComponentLineChartDayDumpFreelance />
			</div>
		</DayDumpProvider>
	);
};

export default DayDumpPageFreelance;
