import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessPng from "../../../../assets/success-icon.png";

const ComponentSuccessSignupFreelance = () => {
	const navigate = useNavigate();
	return (
		<div className="card" style={{ padding: "50px 30px" }}>
			<div className="column">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<img
						src={SuccessPng}
						alt="Votre inscription est à succés"
						style={{ width: "70px", height: "auto" }}
					/>
				</div>
				<p className="p-h2">Inscription Freelance Accomplie !</p>
				<p className="p" style={{ color: "#7e7878", textAlign: "center" }}>
					Félicitations pour votre inscription fructueuse en tant que freelance.
					Cette étape ouvre la porte à de nouvelles opportunités, propulsant
					votre avenir professionnel vers le succès. Nous sommes impatients de
					vous accompagner dans cette nouvelle aventure passionnante
				</p>
				<button className="btn-secondary" onClick={() => navigate("/login")}>
					Retourne vers l'application
				</button>
			</div>
		</div>
	);
};
export default ComponentSuccessSignupFreelance;
