import ComponentCardPlacementJoin from "../../../components/admin/placement/card/component.card.placement.join";
import ComponentTableCompany from "../../../components/admin/placement/table/component.table.company";
import { PlacementDataProvider } from "../../../context/admin/placement/placementContext";

const PlacementPage = () => {
	return (
		<PlacementDataProvider>
			<div className="column">
				<ComponentCardPlacementJoin />
				<ComponentTableCompany />
			</div>
		</PlacementDataProvider>
	);
};
export default PlacementPage;
