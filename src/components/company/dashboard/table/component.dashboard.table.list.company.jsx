import React from "react";
import { ComponentDashboardTableCompanyStyled } from "./component.dashboard.table.company.styled";
import ComponentDashboardTableCompany from "./component.dashoard.table.company";
import ConfirmationDeleteModal from "../../../common/ConfirmationDeleteModal";

const ComponentDashboardTableListCompany = () => {
	const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);

	const data = [
		{
			_id: 1,
			nom: "Tsilavina",
			prenom: "Henintsoa",
			email: "tsilavinaandriamahafaly01@gmail.com",
			roles: "ROLES_FREELANCE",
		},
	];

	const openDeleteModalOpen = () => {
		setDeleteModalOpen(true);
	};
	const closeDeleteModal = () => {
		setDeleteModalOpen(false);
	};

	return (
		<ComponentDashboardTableCompanyStyled>
			<div className="content-table">
				<div className="justify-space-between">
					<p className="p-title-table">Listes de toutes les utilisateurs</p>
					<p className="p-a">Voir tous</p>
				</div>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th name="Nom">Nom</th>
								<th name="Prénom">Prénom</th>
								<th name="Email">Email</th>
								<th name="Rôles">Rôles</th>
								<th name="Actions">Actions</th>
							</tr>
						</thead>
						<tbody>
							{data.length > 0 ? (
								data.map((item) => (
									<>
										<ComponentDashboardTableCompany
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
		</ComponentDashboardTableCompanyStyled>
	);
};

export default ComponentDashboardTableListCompany;
