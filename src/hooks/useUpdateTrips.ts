import axios from 'axios';
import { useMutation } from 'react-query';

import { queryClient } from '../App';
import { ITrip } from '../types/api';
import { API_TRIPS } from '../constants/api';

export const useUpdateTrips = () => {
	return useMutation(
		(stop: string) => axios.get(`${API_TRIPS}?departureStop=${stop}`)
			.then(res => res.data),
			{
				onMutate: async () => {
					await queryClient.cancelQueries('trips');

					const previousTrips = queryClient.getQueryData<ITrip>('trips')

					if (previousTrips) {
						queryClient.setQueryData<ITrip>('trips', previousTrips);
					}

					return { previousTrips }
				},
				onError: (err, variables, context) => {
					if (context?.previousTrips) {
						queryClient.setQueryData<ITrip>('trips', context.previousTrips)
					}
				},
				onSettled: (trips) => {
					queryClient.setQueryData('trips', trips);
				}
			}
		);
};
