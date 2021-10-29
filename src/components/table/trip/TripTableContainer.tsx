import React from 'react';
import { TripTable } from './TripTable';
import { Illustration } from '../../illustration/Illustration';


export interface ITripTableContainer {
	className?: string;
	departureStop: string;
}

export const TripTableContainer = ({ className, departureStop }: ITripTableContainer) => {
	if (!departureStop) {
		return (
			<div>
				<p>Please select a departure stop.</p>
				<Illustration />
			</div>
		);

	} else {
		return (
			<TripTable className={className} departureStop={departureStop} />
		);
	}
};

