import styled from 'styled-components';
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
			background-color: ${props => props.theme.background.disabled};
			transition: all .2s ease-out;
		}
	}

	&.mod-checked label::after {
		left: 26px;
	}

`;
