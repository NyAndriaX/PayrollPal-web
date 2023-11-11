import styled from "styled-components";

export const ComponentCardPlacementJoinStyled = styled.div`
	.content-placement {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: none;
		border-radius: 8px;
		background-color: white;
		padding: 20px;
		gap: 40px;
		flex-wrap: wrap;
		z-index: 1;
		border: 1px solid #eaeaea;
	}
	.icon-join {
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(164 166 179);
		font-size: 2rem;
	}
	.css-13cymwt-control {
		box-sizing: initial;
		background-color: white;
		border-color: rgba(240, 241, 247, 1);
		border-radius: 8px;
		width: 98%;
		font-weight: 400;
		font-size: 14px;
		padding: 2px 4px;
	}
	.css-w9q2zk-Input2 {
		font-size: 14px;
		font-weight: 400;
		color: black;
	}
	@media (max-width: 600px) {
		.content-placement {
			flex-direction: column;
		}
	}
`;
