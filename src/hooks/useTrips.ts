import axios from 'axios';
import { useQuery } from 'react-query';
import { ITrip } from '../types/api';

export const useTrips = (departureStop: string) => {
	return useQuery<ITrip[], Error>(
		'trips',
		() => axios.get(`https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${departureStop}`)
			.then(res => res.data)
	);
};
