import React from "react";
import { ComponentTablePlacementListStyled } from "./component.table.placement.styled";
import { usePlacementData } from "../../../../context/admin/placement/placementContext";
import ComponentTablePlacement from "./component.table.placement";

const ComponentTablePlacementList = () => {
	const { data } = usePlacementData();
	const { placementData } = data;

	return (
		<ComponentTablePlacementListStyled>
			<div className="content-table">
				<div
					className="row"
					style={{ justifyContent: "space-between", gap: "2%" }}>
					<p className="p-h3">Listes des placements</p>
				</div>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th style={{ textAlign: "start" }}>Raison social</th>
								<th>Freelanceur</th>
								<th>Freelanceur Chasseur</th>
								<th name="FreelanceurChasseurRevenu">Revenu mensuel</th>
								<th name="Actions">Actions</th>
							</tr>
						</thead>
						<tbody>
							{placementData.map((item) => (
								<ComponentTablePlacement key={item._id} item={item} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</ComponentTablePlacementListStyled>
	);
};
export default ComponentTablePlacementList;
