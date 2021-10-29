import styled from 'styled-components';
// import designTokens from '../../design-tokens/build/ts';


// const { color, size } = designTokens;

export const StyledSpinner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: ${props => props.theme.foreground.accent};
`;
