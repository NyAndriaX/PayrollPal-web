import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGear,
	faChartPie,
	faXmark,
	faFileContract,
	faRightFromBracket,
	faList,
	faUser,
	faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

const SidebarMenu = ({
	navigate,
	location,
	sidebarVisible,
	user,
	handleLogout,
	toggleSidebar,
}) => {
	const userRoles = {
		ROLES_ADMIN: [
			"Dashboard",
			"Listes des entreprises",
			"Validation des freelances",
			"Placement",
			"Paramétre",
		],
		ROLES_FREELANCE: ["Dashboard", "Dépôt des jours", "Paramétre"],
		ROLES_COMPANY: [
			"Dashboard",
			"Freelances",
			"Validation des jours",
			"Paramétre",
		],
	};

	const userRole = user.roles;

	const isActive = (path) => {
		const encodedText = encodeURIComponent(path);
		if (path === "Dashboard") {
			return location.pathname === "/" || location.pathname === "/Dashboard"
				? "active"
				: "";
		} else {
			return location.pathname === `/${encodedText}` ? "active" : "";
		}
	};

	return (
		<div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
			<button onClick={toggleSidebar} className="close-button">
				<FontAwesomeIcon icon={faXmark} />
			</button>
			<div
				className="component-menu "
				style={sidebarVisible ? { display: "block" } : { display: "none" }}>
				<div className="section-menu-profil">
					{user.roles === "ROLES_COMPANY" ? (
						<>
							<p className="p-user-title-large">{user.raisonSocial}</p>

							<p className="p-user-title-medium">
								{user.representantNom} {user.representantPrenom}
							</p>
						</>
					) : (
						<>
							<p className="p-user-title-large">{user.nom}</p>
							<p className="p-user-title-medium">{user.prenom}</p>
						</>
					)}
				</div>
				<ul>
					{userRoles[userRole] &&
						userRoles[userRole].map((route) => (
							<li
								key={route}
								onClick={(e) => {
									if (window.innerWidth <= 768) {
										toggleSidebar();
									}
									navigate(route);
								}}
								className={isActive(route)}>
								{route === "Dashboard" && <FontAwesomeIcon icon={faChartPie} />}
								{route === "Validation des jours" && (
									<FontAwesomeIcon icon={faFileContract} />
								)}
								{route === "Listes des entreprises" && (
									<FontAwesomeIcon icon={faList} />
								)}
								{route === "Freelances" && (
									<FontAwesomeIcon icon={faFileContract} />
								)}
								{route === "Validation des freelances" && (
									<FontAwesomeIcon icon={faUser} />
								)}
								{route === "Dépôt des jours" && (
									<FontAwesomeIcon icon={faFileSignature} />
								)}
								{route === "Placement" && (
									<FontAwesomeIcon icon={faFileSignature} />
								)}
								{route === "Paramétre" && <FontAwesomeIcon icon={faGear} />}
								<span>{route}</span>
							</li>
						))}
				</ul>
				<ul>
					<li onClick={handleLogout}>
						<FontAwesomeIcon icon={faRightFromBracket} />
						<span>Déconnexion</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SidebarMenu;
