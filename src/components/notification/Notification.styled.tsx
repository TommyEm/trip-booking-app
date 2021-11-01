import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledNotification = styled.div`
	position: absolute;
	top: ${size.space.s4.value};
	right: ${size.space.s4.value};
	z-index: 100;

	.toast {
		background-color: ${props => props.theme.background.subtle};
	}

	.toast-header {
		background-color: ${props => props.theme.background.accent};
		color: ${props => props.theme.foreground.primary};
	}

	.toast-body {
		color: ${props => props.theme.foreground.secondary};
	}
`;
