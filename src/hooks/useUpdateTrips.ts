import axios from 'axios';
import { useMutation } from 'react-query';

import { queryClient } from '../App';
import { ITrip } from '../types/api';

export const useUpdateTrips = () => {
	return useMutation(
		(stop: string) => axios.get(`https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${stop}`).then(res => res.data),
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
