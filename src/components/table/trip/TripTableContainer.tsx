import React from 'react';
import { TripTable } from './TripTable';


export interface ITripTableContainer {
	className?: string;
	departureStop: string;
}

export const TripTableContainer = ({ className, departureStop }: ITripTableContainer) => {
	if (!departureStop) {
		return <p>Please select a departure stop.</p>;

	} else {
		return (
			<TripTable className={className} departureStop={departureStop} />
		);
	}
};

