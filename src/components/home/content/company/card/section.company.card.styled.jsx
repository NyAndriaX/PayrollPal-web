import styled from "styled-components";

export const SectionCompanyCardStyled = styled.div`
	.p-h2 {
		font-size: max(15px, calc(0.5rem + 0.75vw));
		font-family: "Mulish", sans-serif;
		font-weight: 700;
		line-height: 1.4;
		color: #0d0c22;
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
	}

	.slideouter {
		width: 100%;
		overflow: hidden;
		margin: auto;
		display: flex;
	}
	p {
		color: #0d0c22;
	}

	.preSlide {
		z-index: 2;
		left: 10px;
		position: absolute;
		top: 50%;
		color: #0080cd;
		background-color: white;
	}

	.nextSlide {
		right: 10px;
		position: absolute;
		top: 50%;
		color: #0080cd;
		background-color: white;
	}
	.social {
		text-align: center;
	}

	.company-card .p-description {
		display: none;
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

	.company-card {
		display: flex;
		min-width: 350px;
		flex-direction: column;
		border-radius: 8px;
		background-color: white;
		border: 1px solid #eaeaea;
		transition: background-color 3s ease-in-out 0.5s;
	}

	.company-card:hover {
		background-color: #f0f0f0;
	}

	.company-card-img {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
	}
	.company-img-couverture {
		width: 100%;
		max-height: 500px;
		object-fit: cover;
		border-radius: 8px 8px 0px 0px;
	}
	.company-card-info {
		padding: 2rem;
	}

	scored: true;
`;
