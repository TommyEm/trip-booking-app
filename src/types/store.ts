import { Dispatch, ReducerAction } from 'react';
import { DefaultTheme } from 'styled-components';
import { reducer } from '../store/reducer';


export interface IAppState {
	departureStop: string;
	isDarkMode: boolean;
	theme: DefaultTheme;
}

export interface IAppContext {
	state: IAppState;
	dispatch: Dispatch<ReducerAction<typeof reducer>>;
}

export interface IAction {
	type: string;
	payload?: any;
}
