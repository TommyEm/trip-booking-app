import React, { useContext } from 'react';

import { AppContext } from '../../../store/Store';
import { StyledTripLayout } from './TripLayout.styled';
import { Spacer } from '../spacer/Spacer';
import { TripForm } from '../../form/trip/TripForm';
import { TripTableContainer } from '../../table/trip/TripTableContainer';


export interface ITripLayoutProps {
	className?: string;
}

export const TripLayout: React.FC<ITripLayoutProps> = ({
	className,
}: ITripLayoutProps) => {

	const { state: { departureStop } } = useContext(AppContext);

	return (
		<StyledTripLayout
			className={`TripLayout ${className}`}
			data-testid='test-TripLayout'
		>
			<Spacer size={6}>
				<TripForm />
				<TripTableContainer departureStop={departureStop} />
			</Spacer>
		</StyledTripLayout>
	);
}
