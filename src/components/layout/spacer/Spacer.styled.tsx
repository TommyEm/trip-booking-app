import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledSpacer = styled.div<{ size: number }>`
	margin: 0;

	&.mod-horizontal > * + * {
		margin-left: ${props => (size.space as any)[`s${props.size}`].value};
	}

	&.mod-vertical > * + * {
		margin-top: ${props => (size.space as any)[`s${props.size}`].value};
	}
`;
