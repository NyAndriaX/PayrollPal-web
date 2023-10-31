import React from "react";
import { DashboardDataContext } from "../../../../context/admin/dashboard/dashboardContext";

const ComponentCardAdmin = () => {
	const { data, filterDataInFreelance, filterDataInCompany } =
		React.useContext(DashboardDataContext);
	return (
		<>
			<div className="justify-space-between">
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3">Nombre des Freelances</p>
					<div className="row-btn-2">
						<p className="p-indicateur-primary">{data.nbrFreelance}</p>
						<button className="btn-primary" onClick={filterDataInFreelance}>
							Filtrer le tableau
						</button>
					</div>
				</div>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3-secondary">Nombre des entreprises</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">{data.nbrCompany}</p>
						<button className="btn-secondary" onClick={filterDataInCompany}>
							Filtrer le tableau
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ComponentCardAdmin;
