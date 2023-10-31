import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const ComponentCardCompany = () => {
	return (
		<div className="row">
			<div className="card" style={{ backgroundColor: "rgb(255 249 240)" }}>
				<p className="p-h3" style={{ color: "#ff8a00" }}>
					<FontAwesomeIcon icon={faBell} /> À connaître
				</p>
				<p className="p">
					Boostez votre entreprise avec FreelPay : des talents freelance, des
					solutions professionnelles
				</p>
			</div>
			<div className="card">
				<p className="p-h3-secondary">Nombre des entreprise</p>
				<div className="row-btn-2">
					<p className="p-indicateur-secondary">0</p>
					<button className="btn-secondary">Creer un entreprise</button>
				</div>
			</div>
		</div>
	);
};

export default ComponentCardCompany;
