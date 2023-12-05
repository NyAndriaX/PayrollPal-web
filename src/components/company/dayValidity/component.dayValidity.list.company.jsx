import ComponentDayValidityCompany from "./component.dayValidity.company";
import { ComponentDayValidityCompanyStyled } from "./component.dayValidity.company.styled";
import { useCompanyDayDumpData } from "../../../context/company/dayValidity/dayValidityContext";
import NotData from "../../common/NotData";
import React from "react";

const ComponentDayValidityListCompany = () => {
	const { dayDumpData, validationDayDump, refusDayDump } =
		useCompanyDayDumpData();
	const { dayValidity } = dayDumpData;

	return (
		<ComponentDayValidityCompanyStyled>
			<div className="row">
				{dayValidity.length > 0 ? (
					dayValidity?.map((item) => (
						<React.Fragment key={item._id}>
							<ComponentDayValidityCompany
								key={item._id}
								item={item}
								validationDayDump={validationDayDump}
								refusDayDump={refusDayDump}
							/>
						</React.Fragment>
					))
				) : (
					<NotData />
				)}
			</div>
		</ComponentDayValidityCompanyStyled>
	);
};
export default ComponentDayValidityListCompany;
