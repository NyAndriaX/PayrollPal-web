import React from "react";
import ComponentNavigation from "../../components/home/navigation";
import ComponentHero from "../../components/home/hero/component.hero";
import ComponentHomeFooter from "../../components/home/footer/component.home.footer";
import ComponentHomeContent from "../../components/home/content";

const HomePage = () => {
	return (
		<div>
			<ComponentNavigation />
			<ComponentHero />
			<ComponentHomeContent />
			<ComponentHomeFooter />
		</div>
	);
};

export default HomePage;
