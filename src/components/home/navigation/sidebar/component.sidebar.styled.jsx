import { styled } from "styled-components";

export const ComponentSidebarStyled = styled.div`
	position: absolute;
	z-index: 3;
	width: calc(100% - 20px);
	height: calc(100vh - ${(props) => props.rectNavbar?.height + 5}px);
	background-color: white;
	padding: 10px;
	li {
		list-style: none;
	}
	.nav-v2-main__item {
		color: #0d0c22;
		font-family: "Mulish", sans-serif;
		font-weight: bold;
		font-size: 15px;
		padding: 5px 5px;
		cursor: pointer;
	}
	.nav-v2-main__item:hover {
		color: #ada2a2;
	}
	.nav-v2-main__list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.nav-v2-main {
		border-bottom: 1px solid #eaeaea;
	}
	button {
		border: none;
		background: white;
	}
	.btn-action-wrapper {
		display: flex;
		padding: 10px 40px;
	}

	scoped: true;
`;
