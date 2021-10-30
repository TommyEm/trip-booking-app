import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;


export const StyledTripTableContainer = styled.div`

.TripTableContainer-placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding-top: ${size.space.s9.value};
		padding-bottom: ${size.space.s9.value};
	}

	.TripTableContainer-tip {
		color: ${props => props.theme.foreground.subtle};
		font-size: ${size.font.s4.value};
	}

	.TripTableContainer-illustration {
		width: 70%;
	}

`;