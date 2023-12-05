import { ComponentFreelancesTableStyled } from "./component.freelances.table.styled";
import { useCompanyDashboardData } from "../../../context/company/dashboard/CompanyDashboardContext";
import ComponentFreelancesTable from "./component.freelances.table";
import React from "react";

const ComponentFreelancesTableList = () => {
	const { companyData, deleteOnePlacementInThisEntreprise } =
		useCompanyDashboardData();

	const { freelances } = companyData;

	return (
		<ComponentFreelancesTableStyled>
			<div className="content-table">
				<div className="justify-space-between">
					<p className="p-title-table">Listes des Freelanceurs</p>
				</div>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th style={{ textAlign: "start" }}>Nom et prénom</th>
								<th>TJM en euros</th>
								<th>Téléphone</th>
								<th>intitulé de poste</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{freelances.length > 0 ? (
								freelances.map((item) => (
									<React.Fragment key={item._id}>
										<ComponentFreelancesTable
											key={item.id}
											data={item}
											deleteOnePlacementInThisEntreprise={
												deleteOnePlacementInThisEntreprise
											}
										/>
									</React.Fragment>
								))
							) : (
								<tr>
									<td colSpan={5}>
										<p
											className="p-h3 text-center"
											style={{ fontSize: "0.85rem" }}>
											Aucune donner disponible
										</p>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</ComponentFreelancesTableStyled>
	);
};
export default ComponentFreelancesTableList;
