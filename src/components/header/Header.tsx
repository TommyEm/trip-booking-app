import React, { useContext, useState } from 'react';
import {
	ToggleButton,
	Col,
	Row,
} from 'react-bootstrap';

import { StyledHeader } from './Header.styled';
import { Title } from '../typography/title/Title';
import * as actions from '../../store/actionTypes';
import { AppContext } from '../../store/Store';
import { themeDarkMode, themeLightMode } from '../../style/themes';


export interface IHeaderProps {

}

export const Header = (props: IHeaderProps) => {

	const [isDarkMode, setDarkMode] = useState<boolean>(true);
	const { state, dispatch } = useContext(AppContext);

	const toggleThemeMode = () => {
		setDarkMode(!isDarkMode);
		// dispatch({ type: actions.UPDATE_THEME_MODE, payload: isDarkMode });
		dispatch({ type: actions.UPDATE_THEME, payload: isDarkMode ? themeDarkMode : themeLightMode });
	};

	return (
		<StyledHeader className='App-header'>
			<Row>
				<Col xs={9}>
					<Title>Trip Booking</Title>
				</Col>
				<Col className='App-header-right' xs={3}>
					<ToggleButton
						id='toggle-dark-mode'
						checked={isDarkMode}
						value='dark'
						onClick={toggleThemeMode}
					>
						Toggle
					</ToggleButton>
				</Col>
			</Row>
		</StyledHeader>
	);
};
