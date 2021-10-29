import React, { createContext, useReducer } from 'react';
import { themeDarkMode } from '../style/themes';
import { IAppContext, IAppState } from '../types/store';
import { reducer } from './reducer';


export const initialState: IAppState = {
	departureStop: '',
	isDarkMode: true,
	theme: themeDarkMode,
};


export const AppContext = createContext<IAppContext>({
	state: initialState,
	dispatch: () => { },
});

export const Store: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}
