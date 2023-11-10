import ComponentCardFreelance from "../../../components/freelance/dayDump/card/component.card.freelance";
import { DayDumpProvider } from "../../../context/freelance/dayDump/dayDumpContext.jsx";

const DayDumpPageFreelance = () => {
	return (
		<DayDumpProvider>
			<div className="column">
				<ComponentCardFreelance />
			</div>
		</DayDumpProvider>
	);
};

export default DayDumpPageFreelance;
