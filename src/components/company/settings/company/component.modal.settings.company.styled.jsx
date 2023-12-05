import styled from "styled-components";

export const ComponentModalSettingsCompanyStyled = styled.div`
	.inline-component-form {
		display: flex;
		justify-content: space-between;
		flexwrap: wrap;
		gap: 10px;
	}
	.column-content-form {
		flex: 1 1 48%;
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
	.input-inline {
		width: 100%;
	}
	.no-height {
		height: 0;
		margin-top: 0;
	}
	@media (min-width: 768px) {
		.input-inline {
			width: 85%;
		}
	}
`;
