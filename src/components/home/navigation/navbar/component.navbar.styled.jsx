import styled from "styled-components";

export const ComponentNavbarStyled = styled.div`
	* {
		padding: 0;
		margin: 0;
	}
	.header-nav-v2__wrapper {
		position: relative;
		padding: 0 2rem;
		background-color: white;
	}
	.nav-v2__wrapper {
		display: grid;
		grid-template-columns: 150px 30rem auto;
		grid-template-rows: 80px;
		align-items: center;
		paddingg: 10px 20px;
		gap: 20px;
	}
	li {
		list-style: none;
	}
	.nav-v2-search__input {
		border: none;
		background: white;
		padding: 10px 20px;
		padding-left: 30px;
		font-size: 14px;
		border-radius: 8px;
	}
	.nav-v2-dynamic__logged-out {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		column-gap: 24px;
	}
	.btn-action-wrapper {
		display: flex;
		width: 100%;
		gap: 10px;
		flex: 1;
	}
	.nav-v2-dynamic__login,
	.nav-v2-dynamic__logup {
		flex: 1;
	}

	@media (max-width: 978px) {
		.nav-v2-main,
		.nav-v2-dynamic__logged-out {
			display: none;
		}
	}

	.nav-v2-main__item {
		color: #0d0c22;
		font-family: "Mulish", sans-serif;
		font-weight: bold;
		font-size: 14px;
		padding: 5px 5px;
		cursor: pointer;
	}
	.nav-v2-main__item:hover {
		color: #ada2a2;
	}
	.search-input-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-icon {
		position: relative;
		left: 25px;
		color: #b9b7b7;
	}

	.p-h1 {
		font-size: max(20px, calc(0.5rem + 1vw));
		text-align: center;
		font-family: "Mulish", sans-serif;
		font-weight: 700;
		line-height: 1.4;
		color: #0d0c22;
	}

	ul li p {
		color: #0d0c22;
	}

	.nav-v2__wrapper .nav-v2-main__list {
		display: flex;
		gap: 2rem;
	}

	.nav-v2__wrapper .toggle_btn {
		color: black;
		cursor: pointer;
		display: none;
		font-size: 1.5rem;
	}

	.action_btn {
		background-color: orange;
		padding: 0.5rem 1rem;
		border: none;
		outline: none;
		border-radius: 20px;
		font-size: 1rem;
		font-weight: bold;
	}

	.action_btn:hover {
		color: white;
		scale: 1.05;
	}
	.action_btn:active {
		scale: 0.95;
	}

	.dropdown_menu {
		right: 2rem;
		position: absolute;
		background: grey;
		backdrop-filter: blur(15px);
		top: 60px;
		overflow: inherit;
		width: 300px;
		border-radius: 10px;
		transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.dropdown_menu li {
		padding: 0.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dropdown_menu.open {
		height: 240px;
	}

	.dropdown_menu .action_btn {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	button {
		border: none;
		padding: 10px 10px;
		border-radius: 8px;
	}
	.nav-v2-dynamic__login {
		background-color: white;
		border: 1px solid rgb(55 81 255);
		color: rgb(55 81 255);
	}
	.nav-v2-dynamic__logup {
		background-color: rgb(55 81 255);
		color: white;
	}

	.nav-v2-logo {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	@media (max-width: 576px) {
		.dropdown_menu {
			left: 2rem;
			width: unset;
		}
	}
	.nav-v2-dynamic__logged-out-in-mobile-phone {
		display: none;
	}
	.search-icon-view {
		color: #ada2a2;
		cursor: pointer;
	}
	.search-input-wrapper {
		display: flex;
	}

	@media (max-width: 992px) {
		.nav-v2__wrapper .toggle_btn {
			display: block;
		}
		.nav-v2__wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 0px;
		}
		.nav-v2-dynamic__logged-out-in-mobile-phone {
			display: flex;
			align-items: center;
			gap: 20px;
		}
		.search-input-wrapper {
			display: none;
		}
	}

	scoped: true;
`;
