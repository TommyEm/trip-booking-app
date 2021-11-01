import React, { useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

import { useTrips } from '../../../hooks/useTrips';
import { StyledTripTable } from './TripTable.styled';
import { Notification } from '../../notification/Notification';
import { BasicSpinner } from '../../spinner/BasicSpinner';
import { API_BOOKING } from '../../../constants/api';
import { formatDateTime, sortTripData } from '../../../lib/utils';
import { ITrip } from '../../../types/api';


export interface ITripTable {
	className?: string;
	departureStop: string;
}

export const TripTable = ({ className, departureStop }: ITripTable) => {

	const [showBookSuccess, setShowBookSuccess] = useState<boolean>(false);
	const [bookedTrip, setBookedTrip] = useState<ITrip>({} as ITrip);
	const {
		data: trips,
		error,
		isError,
		isLoading,
	} = useTrips(departureStop);

	const handleBookTrip = (tripId: string) => {
		axios.put(`${API_BOOKING}${tripId}`, { booked: true })
			.then(res => {
				// Display success notification
				if (trips) {
					setBookedTrip(trips.filter(trip => trip.id.toString() === tripId)[0]);
				}

				setShowBookSuccess(true);
				return res.data;

			}).catch(err => {
				console.log(err);
			});
	};

	if (isLoading) {
		return <BasicSpinner />;
	}

	if (isError) {
		return (
			<div>
				<p>Something went wrong.</p>
				<p>{error?.message}</p>
			</div>
		);
	}

	if (trips) {
		sortTripData(trips);
	}

	function formatTripInfo(trip: ITrip) {
		return `${trip.departureStop} - ${trip.arrivalStop}`;
	}

	return (
		<StyledTripTable className={'TripTable ' + className}>
			<Notification
				isShown={showBookSuccess}
				tripInfo={formatTripInfo(bookedTrip)}
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
					{trips?.map(trip => {
						return (
							<tr key={trip.id}>
								<td className='TripTable-departure'>
									<span className='TripTable-stop-name'>
										{trip.departureStop}
									</span>
									<br />
									<span className='TripTable-stop-time'>
										{formatDateTime(trip.departureTime)}
									</span>
								</td>
								<td className='TripTable-arrival'>
									<span className='TripTable-stop-name'>
										{trip.arrivalStop}
									</span>
									<br />
									<span className='TripTable-stop-time'>
										{formatDateTime(trip.arrivalTime)}
									</span>
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
