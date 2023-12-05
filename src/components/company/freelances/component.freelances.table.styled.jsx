import { styled } from "styled-components";

export const ComponentFreelancesTableStyled = styled.div`
	td {
		text-align: end;
	}
	th {
		text-align: end;
	}
	.content-btn-action {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 12px;
	}
	.frontend-class {
		display: inline;
		text-align: center;
		background-color: rgb(128 200 95);
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 5px 20px;
	}
	.backend-class {
		display: inline;
		text-align: center;
		background-color: #3650fb;
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 5px 20px;
	}
	.fullStack-class {
		display: inline;
		text-align: center;
		background-color: rgb(255 249 240);
		color: rgb(253 142 10);
		font-weight: 700;
		border-radius: 8px;
		padding: 5px 20px;
	}
	button {
		font-size: 1rem;
		color: #8b8585;
		border: 1px solid #eaeaea;
		border-radius: 8px;
		padding: 10px;
		background-color: white !important;
	}
`;
