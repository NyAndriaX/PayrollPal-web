import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ComponentHeroStyled } from "./component.hero.styled";

const ComponentHero = () => {
	return (
		<ComponentHeroStyled>
			<div className="search-landing-image-text">
				<p className="p-title">Decouvrir, Opportunités, Postuler </p>
				<p className="p-subtitle">
					Explorez, trouvez, postulez. Votre prochain emploi commence ici.
				</p>
			</div>
			<div className="search-container">
				<div class="search-input-container">
					<div className="search-input-wrapper">
						<FontAwesomeIcon icon={faSearch} className="search-icon" />
						<input
							type="text"
							className="search-input"
							placeholder="Chercher un job par intitulé, mot-clé, ville ou entreprise"
						/>
					</div>

					<select className="dropdown-search-input">
						<option value="option1">dévéloppeur</option>
						<option value="option2">product manager</option>
						<option value="option1">communication</option>
						<option value="option2">data</option>
						<option value="option1">graphiste</option>
						<option value="option2">commercial</option>
					</select>
				</div>
			</div>
		</ComponentHeroStyled>
	);
};

export default ComponentHero;
