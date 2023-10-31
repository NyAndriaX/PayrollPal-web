import styled from "styled-components";

export const ComponentCardPlacementJoinStyled = styled.div`
	.content-placement {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: none;
		border-radius: 8px;
		background-color: white;
		width: 96%;
		padding: 20px;
		gap: 40px;
		flex-wrap: wrap;
	}
	.icon-join {
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(164 166 179);
		font-size: 2rem;
	}
	@media (max-width: 600px) {
		.content-placement {
			flex-direction: column;
		}
	}
`;
