const ComponenetDashboardCompany = () => {
	return (
		<>
			<div className="justify-space-between">
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3 text-center">Nombre des Freelances</p>
					<p
						className="p-indicateur-primary text-center"
						style={{ color: "black" }}>
						O
					</p>
				</div>
				<div className="card" style={{ maxWidth: "initial" }}>
					<p className="p-h3-secondary">Jours à valider</p>
					<div className="row-btn-2">
						<p className="p-indicateur-secondary">0</p>
						<button className="btn-secondary">valider les jours</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default ComponenetDashboardCompany;
