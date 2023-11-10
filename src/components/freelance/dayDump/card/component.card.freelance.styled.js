import styled from "styled-components";

export const ComponentCardFreelanceStyled = styled.div`
	.row {
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		padding: 20px;
		max-width: initial;
		min-width: 250px;
		width: 30%;
		flex: 1;
		background-color: white;
		border-radius: 8px;
		border: 1px solid #eaeaea;
	}
	.btn-disabled {
		background-color: #f7f8fc !important;
		color: rgb(164 166 179) !important;
		border-radius: 8px !important;
	}
	@media (max-width: 600px) {
		.row {
			flex-direction: inherit;
		}
	}
`;
