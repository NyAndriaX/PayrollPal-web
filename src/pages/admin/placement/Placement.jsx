import ComponentCardPlacementJoin from "../../../components/admin/placement/card/component.card.placement.join";
import ComponentTablePlacementList from "../../../components/admin/placement/table/component.table.placement.list";
import { PlacementDataProvider } from "../../../context/admin/placement/placementContext";

const PlacementPage = () => {
	return (
		<PlacementDataProvider>
			<div className="column">
				<ComponentCardPlacementJoin />
				<ComponentTablePlacementList />
			</div>
		</PlacementDataProvider>
	);
};
export default PlacementPage;
