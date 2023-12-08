import styled from "styled-components";
import BG from "../../../assets/bg-hero.jpg";

export const ComponentHeroStyled = styled.div`
	scoped: true;
	.search-landing-image-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: url(${BG});
		background-size: cover;
		background-position: center;
		background-color: rgb(142 120 121 / 66%);
		background-blend-mode: multiply;
		height: calc(15rem + 10vw);
		width: 100%;
		opacity: 0.9;
	}
	.p-title {
		color: white;
		font-size: calc(15px + 2vw);
		font-weight: 900;
		text-align: center;
		padding: 0 1rem;
	}
	.search-icon {
		position: relative;
		left: 0px;
		color: #b9b7b7;
	}

	.p-subtitle {
		color: white;
		font-size: calc(15px + 0.5vw);
		text-align: center;
		padding: 0 1rem;
	}
	.search-input-wrapper {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
	.search-container {
		position: relative;
		z-index: 2;
		margin-top: -30px;
		padding: 0px 20%;
	}
	.select2 {
		position: relative;
		right: 2px;
	}
	.search-input {
		border: 1px solid #eaeaea;
		padding: 0;
		border-radius: 8px 0px 0px 8px;
		padding-right: 24px;
		padding-left: 60px;
		height: 98%;
		width: calc(100% + 35px);
		margin-left: -35px;
		font-size: 16px;
		box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
	}
	.search-input-container {
		display: flex;
		height: calc(50px + 1vw);
	}
	.dropdown-search-input {
		border: 1px solid #eaeaea;
		background: white;
		height: 100%;
		padding: 0px 10px;
		border-radius: 0px 8px 8px 0px;
		box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
	}
	@media (max-width: 800px) {
		.search-container {
			padding: 0 8%;
		}
	}
`;
