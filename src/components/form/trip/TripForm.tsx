import React, { useCallback, useContext } from 'react';
import { Form } from 'react-bootstrap';

import * as actions from '../../../store/actionTypes';
import { useStops } from '../../../hooks/useStops';
import { AppContext } from '../../../store/Store';
import { StyledTripForm } from './TripForm.styled';
import { BasicSpinner } from '../../spinner/BasicSpinner';


export interface ITripFormProps {
	className?: string;
}

export const TripForm: React.FC<ITripFormProps> = ({
	className,
}: ITripFormProps) => {
	const { state: { departureStop }, dispatch } = useContext(AppContext);

	const {
		data: stops,
		error,
		isError,
		isLoading
	} = useStops();

	const handleChangeStop = useCallback((stop: string) => {
		dispatch({ type: actions.UPDATE_DEPARTURE_STOP, payload: stop });
	}, [dispatch]);

	if (isLoading) {
		return <BasicSpinner />;
	}

	if (isError) {
		return (
			<div>
				<p>Something went wrong.</p>
				<p>{error?.message}</p>
			</div>
		);
	}

    return (
		<StyledTripForm
			className={`TripForm ${className}`}
			data-testid='test-TripForm'
		>
			<Form>
				<Form.Group>
					<Form.Select
						aria-label='Select a stop'
						value={departureStop}
						onChange={e => handleChangeStop(e.currentTarget.value)}
					>
						<option value=''>Select a departure stop</option>
						{stops?.map((stop: string) => (
							<option key={stop} value={stop}>
								{stop}
							</option>
						))}
					</Form.Select>
				</Form.Group>
			</Form>
		</StyledTripForm>
	);
}
