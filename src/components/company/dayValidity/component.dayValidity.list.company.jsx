import ComponentDayValidityCompany from "./component.dayValidity.company";
import { ComponentDayValidityCompanyStyled } from "./component.dayValidity.company.styled";
import { useCompanyDayDumpData } from "../../../context/company/dayValidity/dayValidityContext";

const ComponentDayValidityListCompany = () => {
	const { dayDumpData, validationDayDump, refusDayDump } =
		useCompanyDayDumpData();
	const { dayValidity } = dayDumpData;

	return (
		<ComponentDayValidityCompanyStyled>
			<div className="row">
				{dayValidity?.map((item) => (
					<ComponentDayValidityCompany
						key={item._id}
						item={item}
						validationDayDump={validationDayDump}
						refusDayDump={refusDayDump}
					/>
				))}
			</div>
		</ComponentDayValidityCompanyStyled>
	);
};
export default ComponentDayValidityListCompany;
