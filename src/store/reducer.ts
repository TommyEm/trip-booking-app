import produce from 'immer';
import { IAppState, IAction } from '../types/store';
import * as actions from '../store/actionTypes';


export const reducer = produce((draft: IAppState, action: IAction) => {
	switch (action.type) {
		case actions.UPDATE_DEPARTURE_STOP:
			draft.departureStop = action.payload;
			break;

		default:
			break;
	}
})
