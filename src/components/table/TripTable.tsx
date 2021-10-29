import React from 'react';
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
								<Button onClick={() => console.log('Book')}>Book now</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

