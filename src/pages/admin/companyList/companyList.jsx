import ComponentTableCompanyList from "../../../components/admin/companyList/table/component.table.list.company";
import ComponentCardCompany from "../../../components/admin/companyList/card/component.card.company";
import { CompanyProvider } from "../../../context/admin/company/companyContext";

const CompanyList = () => {
	return (
		<CompanyProvider>
			<div className="column">
				<ComponentCardCompany />
				<ComponentTableCompanyList />
			</div>
		</CompanyProvider>
	);
};

export default CompanyList;
