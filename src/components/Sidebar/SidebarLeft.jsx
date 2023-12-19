import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarMenu from "./SidebarMenu";
import Gravatar from "react-gravatar";
import { useUserData } from "../../context/authentification/userContext";
import { useLocation, useNavigate } from "react-router-dom";

const pathTitles = {
	"/": "Dashboard",
	"/Dashboard": "Dashboard",
	"/Listes%20des%20entreprises": "Listes des Entreprises",
	"/Validation%20des%20freelances": "Validation des Freelances",
	"/Placement": "Placement",
	"/Param%C3%A9tre": "Profil et Entreprise",
	"/Validation%20des%20jours": "Validation des jours",
	"/Freelances": "Freelances",
	"/D%C3%A9p%C3%B4t%20des%20jours": "Dépôt des jours",
};

const SidebarLeft = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [sidebarVisible, setSidebarVisible] = React.useState(false);
	const [titlePage, setTitlePage] = React.useState(
		pathTitles[location.pathname] || "Page Inconnue"
	);
	const { data, logout } = useUserData();
	const user = data.infosUsers;

	React.useEffect(() => {
		setTitlePage(pathTitles[location.pathname] || "Page Inconnue");
	}, [location.pathname]);

	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	return (
		<>
			<div
				className="navbar"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "17px 5px",
				}}>
				<div className="content-toggle-btn">
					<button onClick={toggleSidebar} className="toggle-button">
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
				<div style={{ flex: "1" }}>
					<p className="p-pathname">{titlePage}</p>
				</div>
				<div
					style={{
						width: "280px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "20px",
					}}>
					{user.roles === "ROLES_COMPANY" ? (
						<>
							<p
								style={{
									display: "flex",
									justifyContent: "end",
									flex: "1 1 0%",
								}}>
								<span class="p-user-name">
									{" "}
									{user.representantNom} {user.representantPrenom}
								</span>
							</p>
							<Gravatar
								email={user.representantEmail}
								size={35}
								style={{
									borderRadius: "50%",
									overflow: "hidden",
									marginLeft: "auto",
								}}
							/>{" "}
						</>
					) : (
						<>
							<p
								className="p-user-name"
								style={{
									display: "flex",
									justifyContent: "end",
									flex: "1 1 0%",
								}}>
								<span class="p-user-name">
									{user.nom} {user.prenom}
								</span>
							</p>
							<Gravatar
								email={user.email}
								size={35}
								style={{
									borderRadius: "50%",
									overflow: "hidden",
									marginLeft: "auto",
								}}
							/>
						</>
					)}
				</div>
			</div>
			<div
				className={sidebarVisible ? "container-sidebar" : ""}
				onClick={(e) => {
					if (e.target === e.currentTarget) {
						toggleSidebar();
					}
				}}>
				<SidebarMenu
					toggleSidebar={toggleSidebar}
					navigate={navigate}
					location={location}
					sidebarVisible={sidebarVisible}
					user={user}
					handleLogout={logout}
				/>
			</div>
		</>
	);
};

export default SidebarLeft;
