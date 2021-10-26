import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
	Container,
	Col,
	Row,
	Form,
} from 'react-bootstrap';

import { useStops } from './hooks/useStops';
// import { useTrips } from './hooks/useTrips';
import './App.css';

const queryClient = new QueryClient();

const TestApp = () => {
	const {
		data,
		error,
		isError,
		isLoading
	} = useStops();

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
		<Container>
			<Row>
				<Col>
					<Form>
						<Form.Group>
							<Form.Select aria-label='Select a stop'>
								{data?.map((stop: string) => (
									<option key={stop} value={stop}>
										{stop}
									</option>
								))}
							</Form.Select>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TestApp />
		</QueryClientProvider>
	);
}

export default App;
