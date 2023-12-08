import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ComponentNavbarStyled } from "./component.navbar.styled";

const Navbar = ({ setIsDropDownOpen, isDropDownOpen, toggleDropDown }) => {
	const navigate = useNavigate();
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 975) {
				setIsDropDownOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isDropDownOpen]);

	return (
		<ComponentNavbarStyled>
			<div className="header-nav-v2__wrapper">
				<div className="nav-v2__wrapper">
					<div className="nav-v2-logo">
						<div className="toggle_btn" onClick={toggleDropDown}>
							<FontAwesomeIcon icon={isDropDownOpen ? faTimes : faBars} />
						</div>
						<p className="p-h1">Payrollpal</p>
					</div>
					<nav className="nav-v2-main" role="navigation">
						<ul className="nav-v2-main__list">
							<li className="nav-v2-main__item">Accueil</li>
							<li className="nav-v2-main__item">Trouver un job</li>
							<li className="nav-v2-main__item">Trouver une entreprise</li>
							<li className="nav-v2-main__item">Média</li>
						</ul>
					</nav>
					<div
						style={{
							display: "flex",
							justifyContent: "end",
							alignItems: "center",
							gap: "10px",
						}}>
						<div className="nav-v2-dynamic__logged-out-in-mobile-phone">
							<FontAwesomeIcon icon={faSearch} className="search-icon-view" />
							<button
								className="nav-v2-dynamic__logup"
								onClick={() => navigate("/signup")}>
								S'inscrire
							</button>
						</div>
						<div className="nav-v2-dynamic__logged-out">
							<div className="search-input-wrapper">
								<FontAwesomeIcon icon={faSearch} className="search-icon" />
								<input
									id="searchInput"
									type="text"
									className="nav-v2-search__input"
									placeholder="Cherchez un job, une entreprise"
								/>
							</div>
							<div className="btn-action-wrapper">
								<button className="nav-v2-dynamic__login">Employeur</button>
								<button
									className="nav-v2-dynamic__logup"
									onClick={() => navigate("/login")}>
									Se connecter
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ComponentNavbarStyled>
	);
};

export default Navbar;
