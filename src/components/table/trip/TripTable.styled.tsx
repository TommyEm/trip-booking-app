import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;


export const StyledTripTable = styled.div`

	.TripTable {
		&-table {
			color: ${props => props.theme.foreground.primary};

			td {
				border-color: ${props => props.theme.foreground.subtle};
			}
		}


		&-arrival {
			text-align: right;
		}

		&-booking {
			vertical-align: middle;
			text-align: center;
		}

		&-stop-name {
			font-size: ${size.font.s3.value};
			font-weight: bold;
		}

		&-stop-time {
			color: ${props => props.theme.foreground.secondary};
			font-size: ${size.font.s2.value};
		}

	}
`;
