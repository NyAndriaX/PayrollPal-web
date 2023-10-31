import React, { useState } from "react";
import { ComponentTableCompanyStyled } from "./component.table.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenNib } from "@fortawesome/free-solid-svg-icons";

const ComponentTableCompany = () => {
	const [data, setData] = useState([
		{
			id: 1,
			nom: "John",
			prenom: "Doe",
			email: "john.doe@example.com",
			roles: "Admin",
		},
		{
			id: 2,
			nom: "Jane",
			prenom: "Smith",
			email: "jane.smith@example.com",
			roles: "User",
		},
		// Ajoutez d'autres données ici
	]);

	const handleDelete = (id) => {
		const updatedData = data.filter((item) => item.id !== id);
		setData(updatedData);
	};

	const handleUpdate = (id) => {
		// Mettez en œuvre la logique de mise à jour ici
		// Vous pouvez afficher un formulaire de mise à jour ou effectuer toute autre action nécessaire.
	};

	return (
		<ComponentTableCompanyStyled>
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
								<th name="RaisonSocial">Raison social</th>
								<th name="FreelanceurNom ">Nom du Freelanceur</th>
								<th name="FreelanceurChasseurNom">
									Nom du Freelanceur Chasseur
								</th>
								<th name="FreelanceurChasseurRevenu">
									Revenu mensuel du Freelanceur Chasseur
								</th>
								<th name="Actions">Actions</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id}>
									<td>{item.nom}</td>
									<td>{item.prenom}</td>
									<td>{item.email}</td>
									<td>{item.roles}</td>
									<td className="content-btn-action">
										<button onClick={() => handleDelete(item.id)}>
											<FontAwesomeIcon icon={faTrash} />
										</button>
										<button onClick={() => handleUpdate(item.id)}>
											<FontAwesomeIcon icon={faPenNib} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</ComponentTableCompanyStyled>
	);
};
export default ComponentTableCompany;
