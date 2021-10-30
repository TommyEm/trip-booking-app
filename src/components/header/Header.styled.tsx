import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';


const { size } = designTokens;


export const StyledHeader = styled.header`
	padding-top: ${size.space.s6.value};
	padding-bottom: ${size.space.s4.value};

	.App-header-right {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;