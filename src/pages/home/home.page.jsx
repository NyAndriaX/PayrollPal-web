import React from "react";
import ComponentNavigation from "../../components/home/navigation";
import ComponentHero from "../../components/home/hero/component.hero";
import ComponentHomeFooter from "../../components/home/footer/component.home.footer";

const HomePage = () => {
	return (
		<div>
			<ComponentNavigation />
			<ComponentHero />
			<ComponentHomeFooter />
		</div>
	);
};

export default HomePage;
