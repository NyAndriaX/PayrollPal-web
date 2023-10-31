import ImgFont from "../../../assets/Freelance-auth.png";
import { useNavigate } from "react-router-dom";

const CardSignUpFreelance = () => {
	const navigate = useNavigate();

	return (
		<div className="card">
			<p className="p-h1">Espace Freelance</p>
			<div className="justify-center">
				<img src={ImgFont} width="200" alt="symbole du Freelancer" />
			</div>
			<button className="btn-secondary" onClick={(e) => navigate("/login")}>
				Accéder à l'espace Freelance
			</button>
			<p className="p-h3 text-center">
				Pas inscrit ?{" "}
				<span className="p-a" onClick={(e) => navigate("/signup/freelance")}>
					Inscription
				</span>
			</p>
		</div>
	);
};

export default CardSignUpFreelance;
