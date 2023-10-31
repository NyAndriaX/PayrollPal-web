import styled from "styled-components";

export const ComponentCardSstyled = styled.div`
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 20px;
	}
	.card {
		padding: 20px;
		min-width: 100px;
		width: 40%;
		box-sizing: border-box;
		flex: 1;
		background-color: white;
		border-radius: 8px;
		border: 1px solid #eaeaea;
	}
	.p-title-2 {
		color: rgb(164 166 179);
		font-weight: 700;
		font-size: 16px;
		line-height: 2;
		font-family: "Mulish", sans-serif;
		margin: 0;
	}
	.p-title-2-secondary {
		color: #3650fb;
		font-weight: 700;
		font-size: 16px;
		line-height: 2;
		font-family: "Mulish", sans-serif;
		margin: 0;
	}
	.btn-secondary {
		border: none;
		border-radius: 8px;
		color: white;
		background-color: #3650fb;
		padding: 0px 25px;
		height: 40px;
	}
	.p-indicateur-secondary {
		color: #3650fb;
		font-size: 2rem;
		line-height: 0;
		font-weight: 700;
	}
	.p-p {
		color: black;
		font-size: 13px;
		font-family: "Mulish", sans-serif;
		line-height: 1.5;
		margin: 0;
	}
	.p-em {
		color: #3650fb;
		font-size: 13px;
		font-family: "Mulish", sans-serif;
		margin: 0;
	}
	@media (max-width: 600px) {
		.row {
			flex-direction: column;
		}
		.card {
			width: 100%;
		}
	}
`;
