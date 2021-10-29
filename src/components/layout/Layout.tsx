import React, { useContext } from 'react';
import {
	// Col,
	// Row,
	// Form,
} from 'react-bootstrap';

import { StyledLayout } from './Layout.styled';
// import { useUpdateTrips } from '../../hooks/useUpdateTrips';
import { TripForm } from '../form/trip/TripForm';
import { TripTableContainer } from '../table/trip/TripTableContainer';
import { AppContext } from '../../store/Store';


export interface ILayoutProps {
	className?: string;
}

export const Layout: React.FC<ILayoutProps> = ({
	className,
}: ILayoutProps) => {

	const { state: { departureStop } } = useContext(AppContext);

	// const updateTrips = useUpdateTrips();

	return (
		<StyledLayout
			className={`Layout ${className}`}
			data-testid='test-Layout'
		>

			<TripForm />

			<TripTableContainer departureStop={departureStop} />

			{/* {updateTrips.isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{updateTrips.isError ? (
						<p>Something went wrong.</p>
					) : null}

					{updateTrips.isSuccess ? (
						<TripTableContainer departureStop={departureStop} />
					) : null}
				</>
			)} */}
		</StyledLayout>
	);
}
