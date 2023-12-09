import React, { useRef, useEffect, useState } from "react";
import CompanyCard from "./section.company.card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { SectionCompanyCardStyled } from "./section.company.card.styled";
import Profil from "../../../../../assets/profil_example.jpg";
import Couverture from "../../../../../assets/couverture_example.jpg";

const companies = [
	{
		_id: "1",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "2",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "3",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "4",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "5",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "6",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},

	{
		_id: "7",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "8",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
	{
		_id: "9",
		profil: Profil,
		couverture: Couverture,
		domaines: "Cosmétique, E-commerce, Grande distribution",
		nbrDeSalariees: 123,
		adresse: "New work",
		offres: 120,
		description:
			"XYZ Tech Solutions est une entreprise innovante spécialisée dans le développement de logiciels sur mesure. Nous combinons expertise technique et créativité pour fournir des solutions numériques adaptées aux besoins uniques de nos clients. Notre engagement envers l'excellence et l'efficacité guide notre mission d'apporter des solutions technologiques de pointe pour stimuler la croissance et la réussite de nos partenaires commerciaux.",
	},
];

const SectionCompanyListCard = () => {
	const step = 370;
	const scrollContainerRef = useRef(null);
	const [canScroll, setCanScroll] = useState({
		left: false,
		right: false,
	});

	const handleScroll = async (direction) => {
		const scrollAmount = direction === "next" ? step : -step;
		const scrollContainer = scrollContainerRef.current;
		try {
			if (scrollContainer) {
				scrollContainer.scrollTo({
					left: scrollContainer.scrollLeft + scrollAmount,
					behavior: "smooth",
				});
			}
		} finally {
			setCanScroll({
				left: scrollContainer.scrollLeft > 0,
				right:
					scrollContainer.scrollLeft + scrollContainer.clientWidth <
					scrollContainer.scrollWidth,
			});
		}
	};

	useEffect(() => {
		const handleResize = () => {
			const scrollContainer = scrollContainerRef.current;
			if (scrollContainer) {
				setCanScroll({
					left: scrollContainer.scrollLeft > 0,
					right:
						scrollContainer.scrollLeft + scrollContainer.clientWidth <
						scrollContainer.scrollWidth,
				});
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<SectionCompanyCardStyled>
			<div className="slide-sample">
				<button
					disabled={!canScroll.left}
					className={`preSlide ${!canScroll.left ? "active" : ""}`}
					onClick={() => handleScroll("prev")}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<div className="slideouter" ref={scrollContainerRef}>
					<div className="slideinner">
						{companies.map((company) => (
							<CompanyCard key={company._id} company={company} />
						))}
					</div>
				</div>
				<button
					disabled={!canScroll.right}
					className={`nextSlide ${!canScroll.right ? "active" : ""}`}
					onClick={() => handleScroll("next")}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
		</SectionCompanyCardStyled>
	);
};

export default SectionCompanyListCard;
