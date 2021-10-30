import React from 'react';

import { StyledTripTableContainer } from './TripTableContainer.styled';
import { Spacer } from '../../layout/spacer/Spacer';
import { TripTable } from './TripTable';
import { Illustration } from '../../illustration/Illustration';


export interface ITripTableContainer {
	className?: string;
	departureStop: string;
}

export const TripTableContainer = ({ className, departureStop }: ITripTableContainer) => {
	return (
		<StyledTripTableContainer className='TripTableContainer'>
			{!departureStop ? (
				<Spacer className='TripTableContainer-placeholder' size={9}>
					<p className='TripTableContainer-tip'>Please select a departure stop.</p>
					<div className='TripTableContainer-illustration'>
						<Illustration />
					</div>
				</Spacer>
			) : (
				<TripTable className={className} departureStop={departureStop} />
			)}
		</StyledTripTableContainer>
	);
};
