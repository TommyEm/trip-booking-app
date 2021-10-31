import axios from 'axios';
import { useQuery } from 'react-query';

import { ITrip } from '../types/api';
import { API_TRIPS } from '../constants/api';

export const useTrips = (departureStop: string) => {
	return useQuery<ITrip[], Error>(
		['trips', departureStop],
		() => axios.get(`${API_TRIPS}?departureStop=${departureStop}`)
			.then(res => res.data)
	);
};
