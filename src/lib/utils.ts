import dayjs from 'dayjs';
import { ITrip } from '../types/api';

export function formatDateTime(timestamp: string) {
	return dayjs(timestamp).format('Le DD/MM/YYYY à hh:mm');
}

export function sortTripData(data: ITrip[]) {
	data.sort((a, b) => {
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
}
