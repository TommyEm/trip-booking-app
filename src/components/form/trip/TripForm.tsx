import React, { useCallback, useContext } from 'react';
import { Form, Spinner } from 'react-bootstrap';

import * as actions from '../../../store/actionTypes';
import { queryClient } from '../../../App';
import { useStops } from '../../../hooks/useStops';
import { useUpdateTrips } from '../../../hooks/useUpdateTrips';
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
		data,
		error,
		isError,
		isLoading
	} = useStops();
	const updateTrips = useUpdateTrips();

	const handleChangeStop = useCallback((stop: string) => {
		dispatch({ type: actions.UPDATE_DEPARTURE_STOP, payload: stop });

		queryClient.invalidateQueries('trips');
		updateTrips.mutate(stop);
	}, [dispatch, updateTrips]);

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
						{data?.map((stop: string) => (
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
