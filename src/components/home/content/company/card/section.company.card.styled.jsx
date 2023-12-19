import styled from "styled-components";

export const SectionCompanyCardStyled = styled.div`
	.slideouter {
		width: 100%;
		overflow: hidden;
		margin: auto;
		display: flex;
	}
	.p-h2 {
		font-size: max(15px, calc(0.5rem + 0.75vw));
		font-family: "Mulish", sans-serif;
		font-weight: 700;
		line-height: 1.4;
		color: #0d0c22;
		margin-top: 0;
		transition: margin-top 6s ease-in-out;
	}

	.slide-sample {
		margin: auto;
		position: relative;
		display: table;
	}

	.slideinner {
		display: flex;
		max-width: calc(98vw - 3rem);
		justify-content: flex-start;
		gap: 1rem;
	}

	.company-card-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
		opacity: 1;
		height: auto;
		max-height: auto;
		transition: max-height 3s ease-in-out, padding 4s ease-in-out,
			opacity 4s ease-in-out;
	}

	.company-card:hover .company-card-info {
		opacity: 0;
		max-height: 0;
		height: 0;
		visibility: hidden;
	}

	.company-card-description {
		display: none;
		max-height: 0;
		opacity: 0;
		transition: display 3s ease-in-out, max-height 3s ease-in-out,
			opacity 4s ease-in-out;
	}

	.company-card:hover .company-card-description {
		display: block;
		max-height: auto;
		opacity: 1;
	}

	.company-card-domaine,
	,
	.company-card-info,
	.company-card-description {
		padding: 1rem 2rem;
	}

	.company-card {
		display: flex;
		min-width: 350px;
		flex-direction: column;
		border-radius: 8px;
		background-color: white;
		border: 1px solid #eaeaea;
		transition: ease-in-out 4s;
		position: relative;
	}

	.company-card:hover .company-img-couverture {
		max-height: 0;
	}

	.company-card-img {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.company-img-couverture {
		width: 100%;
		max-height: 500px;
		object-fit: cover;
		border-radius: 8px 8px 0px 0px;
		transition: max-height 4s ease-in-out;
	}

	.company-img-profil {
		position: absolute;
		top: 11rem;
		left: 2rem;
		width: 80px;
		height: 80px;
		border: 1px solid #eaeaea;
		object-fit: contain;
		padding: 8px;
		background-color: white;
		transition: top 4s ease-in-out;
	}

	.company-card:hover .company-img-profil {
		top: 1rem;
	}

	.preSlide,
	.nextSlide {
		position: absolute;
		top: 50%;
		color: #0080cd;
		background-color: white;
	}

	.preSlide {
		z-index: 2;
		left: 10px;
	}

	.nextSlide {
		right: 10px;
	}

	.social {
		text-align: center;
	}

	.slide-sample button {
		border: 1px solid #eaeaea;
	}

	.active {
		display: none;
	}

	button {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		padding: 0.7rem;
		font-size: 20px;
		border: 1px solid #black;
	}

	.company-card:hover {
		transition-delay: 5s;
	}

	scored: true;
`;
