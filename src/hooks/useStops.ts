import axios from 'axios';
import { useQuery } from 'react-query';

import { API_STOPS } from '../constants/api';


export const useStops = () => {
	return useQuery<string[], Error>(
		'get-stops',
		() => axios.get(API_STOPS)
			.then(res => res.data),
	);
};
