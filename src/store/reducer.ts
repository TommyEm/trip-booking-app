import produce from 'immer';
import { IAppState, IAction } from '../types/store';
import * as actions from '../store/actionTypes';


export const reducer = produce((draft: IAppState, action: IAction) => {
	switch (action.type) {
		case actions.UPDATE_DEPARTURE_STOP:
			draft.departureStop = action.payload;
			break;

		case actions.UPDATE_THEME_MODE:
			draft.isDarkMode = action.payload;
			break;

		case actions.UPDATE_THEME:
			draft.theme = action.payload;
			break;

		default:
			break;
	}
})
