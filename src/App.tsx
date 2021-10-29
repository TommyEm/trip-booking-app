import React, { useCallback, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
	Container,
	Col,
	Row,
	Form,
} from 'react-bootstrap';

import { useStops } from './hooks/useStops';
import { useUpdateTrips } from './hooks/useUpdateTrips';
import { TripTableContainer } from './components/table/TripTableContainer';
import './App.css';

export const queryClient = new QueryClient();

const TestApp = () => {
	const [departureStop, setDepartureStop] = useState<string>('');
	const {
		data,
		error,
		isError,
		isLoading
	} = useStops();
	const updateTrips = useUpdateTrips();

	const handleChangeStop = useCallback((stop: string) => {
		setDepartureStop(stop);
		queryClient.invalidateQueries('trips');
		updateTrips.mutate(stop);
	}, [updateTrips]);

	if (isLoading) {
		return <p>Loading...</p>;
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
		<div>
			<Form>
				<Form.Group>
					<Form.Select
						aria-label='Select a stop'
						value={departureStop}
						onChange={(e) => handleChangeStop(e.currentTarget.value)}
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

			{updateTrips.isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{updateTrips.isError ? (
						<p>Something went wrong.</p>
					) : null}

					{updateTrips.isSuccess ? (
						<TripTableContainer departureStop={departureStop} />
					) : null}
				</>
			)}

		</div>
	);
};

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Container>
				<Row>
					<Col>
						<h1>Trip App</h1>
					</Col>
				</Row>
			</Container>
			<TestApp />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
