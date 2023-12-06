import React, { useState } from "react";
import { ComponentTableCompanyStyled } from "./component.table.company.styled";
import { useCompanyData } from "../../../../context/admin/company/companyContext";
import ComponentTableCompany from "./component.table.company";

const ComponentTableCompanyList = () => {
	const { data } = useCompanyData();
	const { companyList } = data;

	const [searchText, setSearchText] = useState("");
	const [filteredCompanies, setFilteredCompanies] = useState([]);

	const handleSearch = (e) => {
		const searchText = e.target.value;
		setSearchText(searchText);

		const filtered = companyList.filter((company) =>
			Object.values(company).some((value) =>
				value.toString().toLowerCase().includes(searchText.toLowerCase())
			)
		);
		setFilteredCompanies(filtered);
	};

	return (
		<ComponentTableCompanyStyled>
			<div className="content-table">
				<div
					className="row"
					style={{ justifyContent: "space-between", gap: "2%" }}>
					<p className="p-h3">Listes de toutes les entreprises</p>

					{/* <div className="row-btn-2" style={{ gap: "2% " }}>
						<input
							type="text"
							style={{ flex: 1 }}
							className="input"
							placeholder="Recherche"
							value={searchText}
							onChange={handleSearch}
						/>
						<button className="btn-primary" style={{ width: "auto" }}>
							rechercher
						</button>
					</div> */}
				</div>
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th style={{ textAlign: "start" }}>Raison sociale</th>
								<th>Nom et Prénom</th>
								<th>Email</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{searchText === "" ? (
								companyList.length !== 0 ? (
									companyList.map((item) => (
										<React.Fragment key={item._id}>
											<ComponentTableCompany key={item._id} item={item} />
										</React.Fragment>
									))
								) : (
									<tr>
										<td colSpan={5}>
											<p
												className="p-h3 text-center"
												style={{ fontSize: "0.85rem" }}>
												Aucune donnée disponible
											</p>
										</td>
									</tr>
								)
							) : filteredCompanies.length > 0 ? (
								filteredCompanies.map((item) => (
									<ComponentTableCompany key={item._id} item={item} />
								))
							) : (
								<td colspan={5}>
									<p
										className="p-h3 text-center"
										style={{ fontSize: "0.85rem" }}>
										Aucune entreprise trouvée.
									</p>
								</td>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</ComponentTableCompanyStyled>
	);
};

export default ComponentTableCompanyList;
