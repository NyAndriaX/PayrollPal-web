import styled from "styled-components";

export const ComponentFreelWaitCardListStyled = styled.div`
	.row {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 20px;
	}
	.card {
		box-sizing: border-box;
		padding: 20px;
		min-width: 250px;
		max-width: initial !important;
		width: 48%;
		flex: unset !important;
		background-color: white;
		border-radius: 8px;
		align-self: stretch;
		border: 1px solid #eaeaeaea;
	}
	@media (max-width: 1200px) {
		.row {
			flex-direction: inherit;
		}
		.card {
			width: 100%;
		}
	}
`;
