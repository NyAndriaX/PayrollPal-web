import { styled } from "styled-components";

export const ComponentTableCompanyStyled = styled.div`
	th[name="RaisonSocial"] {
		width: 20%;
		min-width: 150px;
	}
	th[name="FreelanceurNom"] {
		width: 15%;
		min-width: 120px;
	}
	th[name="FreelanceurChasseurNom"] {
		width: 15%;
		min-width: 120px;
	}
	th[name="FreelanceurChasseurRevenu"] {
		width: 12%;
		min-width: 90px;
	}
	th[name="Actions"] {
		width: 12%;
		min-width: 90px;
		text-align: end;
	}
	.content-btn-action {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 12px;
	}
	.freelance-class {
		text-align: center;
		background-color: rgb(128 200 95);
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 2px 2px;
	}
	.company-class {
		text-align: center;
		background-color: rgb(255 249 240);
		color: rgb(253 142 10);
		font-weight: 700;
		border-radius: 8px;
		padding: 2px 2px;
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
