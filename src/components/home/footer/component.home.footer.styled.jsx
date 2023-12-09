import { styled } from "styled-components";

export const ComponentHomeFooterStyled = styled.div`
	background-color: #173440;
	width: calc(100 % - 1.5rem);
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: white;
	align-items: center;
	scoped: true;
	padding: 3rem 1.5rem;
	.section-links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		column-gap: 20px;
		flex: 1;
		flex-wrap: wrap;
		border-bottom: 1px solid #ccc;
	}
	.section-links div {
		min-width: 200px;
		flex: 1;
	}
	.section-links div label {
		font-family: "Mulish", sans-serif;
		font-size: 14px;
		font-weight: 900;
		text-transform: uppercase;
	}
	.section-links div li {
		cursor: pointer;
	}
	.section-links .sc-bXCLTC {
		display: flex;
		flex-direction: column;
	}
	.p-h1 {
		font-size: max(20px, calc(0.5rem + 1vw));
		font-family: "Mulish", sans-serif;
		text-align: start;
		font-weight: 700;
		line-height: 1;
		color: #fff;
		margin: 0;
	}

	.content-list-row {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
	.content-list-column {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	ul {
		padding: 0;
	}
	li {
		color: white;
		list-style: none;
		font-family: "Mulish", sans-serif;
		font-size: 14px;
	}
	li:hover {
		color: #ada2a2;
	}
	li span.micrographie {
		color: white;
		font-size: 11px;
	}
	li span.macrographie:hover {
		color: white;
		cursor: auto;
		width: 100%;
	}
	li span.micrographie:hover {
		color: white;
	}
	input {
		border: 1px solid #eaeaea;
		border-radius: 8px 0px 0px 8px;
		padding: 0.5rem;
	}
	button {
		padding: 0.5rem;
		border: 1px solid #eaeaea;
		background-color: white;
		border-radius: 0px 8px 8px 0px;
	}
	@media (max-width: 450px) {
		.section-links {
			text-align: center;
			gap: 30px;
		}
		.sc-bXCLTC {
			justify-content: center;
			align-items: center;
		}
	}
`;
