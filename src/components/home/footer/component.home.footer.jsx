import React from "react";
import SectionProductsFooter from "./section/section.products.footer";
import SectionLinksFooter from "./section/section.links.footer";
import { ComponentHomeFooterStyled } from "./component.home.footer.styled";

const ComponentHomeFooter = () => {
	return (
		<ComponentHomeFooterStyled>
			<SectionLinksFooter />
			<SectionProductsFooter />
		</ComponentHomeFooterStyled>
	);
};

export default ComponentHomeFooter;
