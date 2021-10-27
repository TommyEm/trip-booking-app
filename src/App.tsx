import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
	Container,
	Col,
	Row,
	Form,
} from 'react-bootstrap';

import { useStops } from './hooks/useStops';
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
		</QueryClientProvider>
	);
}

export default App;
