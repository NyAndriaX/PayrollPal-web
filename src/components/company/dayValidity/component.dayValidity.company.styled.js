import styled from "styled-components";

export const ComponentDayValidityCompanyStyled = styled.div`
	.row {
		display: flex;
		justify-content: start;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 12px;
	}

	.card {
		box-sizing: border-box;
		padding: 20px;
		min-width: 250px;
		max-width: initial;
		width: 32%;
		flex: unset;
		background-color: white;
		border-radius: 8px;
		align-self: stretch;
		border: 1px solid #eaeaea;
	}

	@media screen and (max-width: 768px) {
		.card {
			width: 48%; /* Deux cartes par ligne sur une tablette */
		}
	}

	/* Media query pour les téléphones */
	@media screen and (max-width: 480px) {
		.card {
			width: 100%; /* Une carte par ligne sur un téléphone */
		}
	}
`;
