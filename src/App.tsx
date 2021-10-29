import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
	Container,
	Col,
	Row,
} from 'react-bootstrap';

import { Store } from './store/Store';
import { Layout } from './components/layout/Layout';
import './App.css';

export const queryClient = new QueryClient();

function App() {
	return (
		<Store>
			<QueryClientProvider client={queryClient}>
				<Container>
					<Row>
						<Col>
							<h1>Trip App</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Layout />
						</Col>
					</Row>
				</Container>

				<ReactQueryDevtools />

			</QueryClientProvider>
		</Store>
	);
}

export default App;
