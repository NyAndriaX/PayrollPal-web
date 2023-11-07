import React, { useState } from "react";
import { ComponentTableSstyled } from "./component.table.styled";
import ComponentTable from "./component.table";
import { DashboardDataContext } from "../../../../context/admin/dashboard/dashboardContext";
import ConfirmationDeleteModal from "../../../common/ConfirmationDeleteModal";

const ComponentTableList = () => {
	const { data, seeAllData, deleteUser } =
		React.useContext(DashboardDataContext);
	const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);

	const openDeleteModalOpen = () => {
		setDeleteModalOpen(true);
	};
	const closeDeleteModal = () => {
		setDeleteModalOpen(false);
	};

	return (
		<ComponentTableSstyled>
			<div className="content-table">
				<div className="justify-space-between">
					<p className="p-title-table">Listes de toutes les utilisateurs</p>
					<p className="p-a" onClick={seeAllData}>
						Voir tous
					</p>
				</div>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th name="Nom" style={{ textAlign: "start" }}>
									Nom
								</th>
								<th name="Prénom">Prénom</th>
								<th name="Email">Email</th>
								<th name="Rôles">Rôles</th>
								<th name="Actions">Actions</th>
							</tr>
						</thead>
						<tbody>
							{data.allUsers.length > 0 ? (
								data.allUsers.map((item) => (
									<>
										<ComponentTable
											key={item._id}
											data={item}
											openDeleteModalOpen={openDeleteModalOpen}
										/>

										<ConfirmationDeleteModal
											key={item._id}
											isOpen={isDeleteModalOpen}
											onRequestClose={closeDeleteModal}
											onDelete={() => deleteUser(item._id, item.roles)}
										/>
									</>
								))
							) : (
								<td colSpan={5}>
									<p
										className="p-h3 text-center"
										style={{ fontSize: "0.85rem" }}>
										Aucune donner disponible
									</p>
								</td>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</ComponentTableSstyled>
	);
};

export default ComponentTableList;
