import ComponentDayValidityListCompany from "../../../components/company/dayValidity/component.dayValidity.list.company";
import { CompanyDayDumpProvider } from "../../../context/company/dayValidity/dayValidityContext";

const DayValidityPageCompany = () => {
	return (
		<>
			<CompanyDayDumpProvider>
				<div className="column">
					<ComponentDayValidityListCompany />
				</div>
			</CompanyDayDumpProvider>
		</>
	);
};

export default DayValidityPageCompany;
