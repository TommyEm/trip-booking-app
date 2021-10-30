import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { StyledHeader } from './Header.styled';
import { Title } from '../typography/title/Title';
import { ToggleModeButton } from '../button/togglemodebutton/ToggleModeButton';


export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
	return (
		<StyledHeader className='App-header' data-testid='test-Header'>
			<Row>
				<Col xs={9}>
					<Title>Trip Booking</Title>
				</Col>
				<Col className='App-header-right' xs={3}>
					<ToggleModeButton />
				</Col>
			</Row>
		</StyledHeader>
	);
};
