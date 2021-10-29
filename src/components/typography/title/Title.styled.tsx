import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledTitle = styled.h1`
	color: ${props => props.theme.foreground.accent};
	font-size: ${size.font.s7.value};
	font-weight: bold;
`;
