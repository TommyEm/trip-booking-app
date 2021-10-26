import axios from 'axios';
import { useQuery } from 'react-query';

export const useTrips = (departureStop: string) => {
	return useQuery<string[], Error>(
		'trips',
		() => axios.get(`https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${departureStop}`)
			.then(res => res.data)
	);
};
