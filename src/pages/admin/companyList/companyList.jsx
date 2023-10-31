import ComponentTableCompanyList from "../../../components/admin/companyList/table/component.table.list.company";
import ComponentCardCompany from "../../../components/admin/companyList/card/component.card.company";

const CompanyList = () => {
	return (
		<div className="column">
			<ComponentCardCompany />
			<ComponentTableCompanyList />
		</div>
	);
};

export default CompanyList;
