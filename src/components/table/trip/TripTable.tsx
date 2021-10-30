import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import {
	Button,
	Spinner,
	Table,
} from 'react-bootstrap';

import { useTrips } from '../../../hooks/useTrips';
import { StyledTripTable } from './TripTable.styled';
import { Notification } from '../../notification/Notification';
import { API_BOOKING } from '../../../constants/api';


export interface ITripTable {
	className?: string;
	departureStop: string;
}

export const TripTable = ({ className, departureStop }: ITripTable) => {

	const [showBookSuccess, setShowBookSuccess] = useState<boolean>(false);
	const {
		data,
		error,
		isError,
		isLoading,
	} = useTrips(departureStop);

	const handleBookTrip = (tripId: string) => {
		axios.put(`${API_BOOKING}${tripId}`, { booked: true })
			.then(res => {
				// Display success notification
				setShowBookSuccess(true);

				return res.data;

			}).catch(err => {
				console.log(err);
			});
	};

	if (isLoading) {
		console.log('Loading');

		return (
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}

	if (isError) {
		return (
			<div>
				<p>Something went wrong.</p>
				<p>{error?.message}</p>
			</div>
		);
	}

	data?.sort((a, b) => {
		const fa = a.arrivalStop.toLowerCase();
		const fb = b.arrivalStop.toLowerCase();

		if (fa < fb) {
			return -1
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});


	return (
		<StyledTripTable className={'TripTable ' + className}>
			<Notification
				isShown={showBookSuccess}
				tripInfo='Test'
				onClose={() => setShowBookSuccess(false)}
			/>

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
