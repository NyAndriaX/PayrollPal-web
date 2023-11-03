import React from "react";
import { ComponentTableCompanyStyled } from "./component.table.company.styled";
import { useCompanyData } from "../../../../context/admin/company/companyContext";
import ComponentTableCompany from "./component.table.company";

const ComponentTableCompanyList = () => {
	const { data } = useCompanyData();
	const { companyList } = data;

	return (
		<ComponentTableCompanyStyled>
			<div className="content-table">
				<div
					className="row"
					style={{ justifyContent: "space-between", gap: "2%" }}>
					<p className="p-h3">Listes de toutes les entreprises</p>

					<div className="row-btn-2" style={{ gap: "2% " }}>
						<input
							type="text"
							style={{ flex: 1 }}
							className="input"
							placeholder="Recherche"
						/>
						<button className="btn-primary" style={{ width: "auto" }}>
							rechercher
						</button>
					</div>
				</div>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Raison social</th>
								<th>Nom et Prénom</th>
								<th>Email</th>
								<th>Rôles</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{companyList.map((item) => (
								<ComponentTableCompany key={item._id} item={item} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</ComponentTableCompanyStyled>
	);
};

export default ComponentTableCompanyList;
