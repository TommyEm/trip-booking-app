import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Button, Table } from 'react-bootstrap';
import { useTrips } from '../../hooks/useTrips';


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
		<Table
			className={className}
			data-testid='test-TripTable'
		>
			<thead>
				<tr>
					<th>Departure</th>
					<th>Departure Time</th>
					<th>Arrival</th>
					<th>Arrival Time</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{data?.map(trip => {
					const departureTime = dayjs(trip.departureTime).format('Le DD/MM/YYYY à hh:mm');
					const arrivalTime = dayjs(trip.arrivalTime).format('Le DD/MM/YYYY à hh:mm');

					return (
						<tr key={trip.id}>
							<td>{trip.departureStop}</td>
							<td>{departureTime}</td>
							<td>{trip.arrivalStop}</td>
							<td>{arrivalTime}</td>
							<td>
								<Button onClick={() => handleBookTrip(trip.id.toString())}>Book now</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

