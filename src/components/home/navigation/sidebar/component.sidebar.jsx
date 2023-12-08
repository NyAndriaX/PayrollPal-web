import React from "react";
import { useNavigate } from "react-router-dom";
import { ComponentSidebarStyled } from "./component.sidebar.styled";

const ComponentSidebar = ({ rectNavbar }) => {
	const navigate = useNavigate();
	return (
		<ComponentSidebarStyled rectNavbar={rectNavbar}>
			<nav className="nav-v2-main" role="navigation">
				<ul className="nav-v2-main__list">
					<li className="nav-v2-main__item">Accueil</li>
					<li className="nav-v2-main__item">Trouver un job</li>
					<li className="nav-v2-main__item">Trouver une entreprise</li>
					<li className="nav-v2-main__item">Média</li>
				</ul>
			</nav>
			<div className="btn-action-wrapper">
				<button
					className="nav-v2-main__item"
					onClick={() => navigate("/login")}>
					Se connecter
				</button>
			</div>
		</ComponentSidebarStyled>
	);
};

export default ComponentSidebar;
