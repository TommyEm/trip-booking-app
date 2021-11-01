import styled from 'styled-components';
import { rgba } from 'polished';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledToggleModeButton = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 140px;
	color: ${props => props.theme.foreground.subtle};
	font-size: ${size.font.s1.value};

	label {
		position: relative;
		width: 50px;
		height: 26px;
		border: none;
		border-radius: 100px;
		text-indent: -9999px;

		::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 4px;
			transform: translateY(-50%);
			z-index: 10;
			width: 18px;
			height: 18px;
			border-radius: 100px;
			background-color: ${props => props.theme.background.accent};
			transition: all .2s ease-out;
		}
	}

	.btn-check + .btn-primary,
	.btn-check:hover + .btn-primary,
	.btn-check:active + .btn-primary {
		background-color: ${props => props.theme.background.subtle};
	}

	.btn-primary:focus,
	.btn-check:focus + .btn-primary {
		border-color: ${props => props.theme.action.focus};
		box-shadow: 0 0 0 4px ${props => rgba(props.theme.action.focus, .5)};
	}

	&.mod-checked label::after {
		background-color: ${props => props.theme.background.primary};
	}

	&.mod-checked .btn-check + .btn-primary {
		background-color: ${props => props.theme.action.active};
	}

	&.mod-checked .btn-check:hover + .btn-primary {
		background-color: ${props => props.theme.action.activeHover};
	}

	&.mod-checked .btn-check:active + .btn-primary {
		background-color: ${props => props.theme.action.activePressed};
	}

	&.mod-checked label::after {
		left: 27px;
	}

`;
