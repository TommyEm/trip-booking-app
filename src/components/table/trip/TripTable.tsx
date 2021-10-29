import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Button, Table } from 'react-bootstrap';

import { useTrips } from '../../../hooks/useTrips';
import { StyledTripTable } from './TripTable.styled';


export interface ITripTable {
	className?: string;
	departureStop: string;
}

export const TripTable = ({ className, departureStop }: ITripTable) => {

	const {
		data,
		error,
		isError,
		isLoading,
	} = useTrips(departureStop);

	const handleBookTrip = (tripId: string) => {
		const res = axios.put(`https://6130d11c8066ca0017fdaa97.mockapi.io/book/${tripId}`, { booked: true })
			.then(res => {
				console.log(res);

				// Display success


			}).catch(err => {
				console.log(err);
			});
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return (
			<div>
				<p>Something went wrong.</p>
				<p>{error?.message}</p>
			</div>
		);
	}

	return (
		<StyledTripTable className={'TripTable ' + className}>
			<Table
				className='TripTable-table'
				data-testid='test-TripTable'
			>
				<thead>
					<tr>
						<th className='TripTable-departure'>
							Departure
						</th>
						<th className='TripTable-arrival'>
							Arrival
						</th>
						<th className='TripTable-booking'>Book</th>
					</tr>
				</thead>
				<tbody>
					{data?.map(trip => {
						const departureTime = dayjs(trip.departureTime).format('Le DD/MM/YYYY à hh:mm');
						const arrivalTime = dayjs(trip.arrivalTime).format('Le DD/MM/YYYY à hh:mm');

						return (
							<tr key={trip.id}>
								<td className='TripTable-departure'>
									<span className='TripTable-stop-name'>{trip.departureStop}</span>
									<br />
									<span className='TripTable-stop-time'>{departureTime}</span>
								</td>
								<td className='TripTable-arrival'>
									<span className='TripTable-stop-name'>{trip.arrivalStop}</span>
									<br />
									<span className='TripTable-stop-time'>{arrivalTime}</span>
								</td>
								<td className='TripTable-booking'>
									<Button onClick={() => handleBookTrip(trip.id.toString())}>Book now</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</StyledTripTable>
	);
};
