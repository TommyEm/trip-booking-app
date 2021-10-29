import { Dispatch, ReducerAction } from 'react';
import { reducer } from '../store/reducer';


export interface IAppState {
	departureStop: string;
}

export interface IAppContext {
	state: IAppState;
	dispatch: Dispatch<ReducerAction<typeof reducer>>;
}

export interface IAction {
	type: string;
	payload?: any;
}
