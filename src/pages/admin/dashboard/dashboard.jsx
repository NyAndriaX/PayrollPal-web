import ComponentCardAdmin from "../../../components/admin/dashboard/card/component.card";
import ComponentTableList from "../../../components/admin/dashboard/table/component.table.list";
import { DashboardProvider } from "../../../context/admin/dashboard/dashboardContext";

const DashboardAdmin = () => {
	return (
		<DashboardProvider>
			<div className="column">
				<ComponentCardAdmin />
				<ComponentTableList />
			</div>
		</DashboardProvider>
	);
};

export default DashboardAdmin;
