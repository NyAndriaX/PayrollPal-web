import ComponentCard from "../../../components/freelance/dashboard/card/component.card";
import { DashboardStyledDiv } from "./dashboard.styled";
import ComponentLineChart from "../../../components/freelance/dashboard/lineChart/component.line_chart";

const DashoardFreelance = () => {
	return (
		<DashboardStyledDiv>
			<div className="component">
				<ComponentCard />
				<ComponentLineChart />
			</div>
		</DashboardStyledDiv>
	);
};

export default DashoardFreelance;
