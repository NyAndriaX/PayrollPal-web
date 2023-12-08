import React, { useEffect, useRef } from "react";
import ComponentSidebar from "./sidebar/component.sidebar";
import Navbar from "./navbar/component.navbar";

const ComponentNavigation = () => {
	const navbarRef = useRef(null);
	const [rectNavbar, setRectNavbar] = React.useState({
		width: null,
		height: null,
	});
	const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

	const toggleDropDown = () => {
		setIsDropDownOpen(!isDropDownOpen);
	};

	useEffect(() => {
		if (navbarRef.current) {
			setRectNavbar({
				...rectNavbar,
				height: navbarRef.current.clientHeight,
				width: navbarRef.current.clientWidth,
			});
		}
	}, [isDropDownOpen]);

	return (
		<React.Fragment>
			<div ref={navbarRef} style={{ position: "relative" }}>
				<Navbar
					toggleDropDown={toggleDropDown}
					isDropDownOpen={isDropDownOpen}
					setIsDropDownOpen={setIsDropDownOpen}
				/>
			</div>

			{isDropDownOpen && <ComponentSidebar rectNavbar={rectNavbar} />}
		</React.Fragment>
	);
};
export default ComponentNavigation;
