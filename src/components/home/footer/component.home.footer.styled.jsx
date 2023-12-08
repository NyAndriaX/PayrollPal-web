import { styled } from "styled-components";

export const ComponentHomeFooterStyled = styled.div`
	background-color: #173440;
	width: calc(100 % - 1.5rem);
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: white;
	align-items: center;
	padding: 1.5rem;
	.section-links {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
		column-gap: 20px;
		flex: 1;
	}
	.section-links .sc-bXCLTC {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.p-h1 {
		font-size: max(20px, calc(0.5rem + 1vw));
		text-align: center;
		font-family: "Mulish", sans-serif;
		font-weight: 700;
		line-height: 1.4;
		color: #fff;
	}

	.section-links a {
		text-decoration: none;
		color: white;
		font-size: 15px;
	}
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	scoped: true;
`;
