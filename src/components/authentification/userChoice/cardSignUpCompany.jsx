import ImgFont from "../../../assets/Company-auth.png";
import { useNavigate } from "react-router-dom";

const CardSignUpCompany = () => {
	const navigate = useNavigate();
	return (
		<div className="card">
			<p className="p-h1">Espace entreprise</p>
			<div className="justify-center">
				<img src={ImgFont} width="200" alt="Symbole du entreprise" />
			</div>
			<button className="btn-secondary" onClick={(e) => navigate("/login")}>
				Accéder à l'espace Company
			</button>
			<p className="p-h3 text-center">
				Pas inscrit ?{" "}
				<span className="p-a" onClick={(e) => navigate("/signup/company")}>
					Inscription
				</span>
			</p>
		</div>
	);
};

export default CardSignUpCompany;
