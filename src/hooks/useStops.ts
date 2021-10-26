import axios from 'axios';
import { useQuery } from 'react-query';

export const useStops = () => {
	return useQuery<string[], Error>(
		'get-stops',
		() => axios.get('https://6130d11c8066ca0017fdaa97.mockapi.io/stops')
			.then(res => res.data),
	);
};
