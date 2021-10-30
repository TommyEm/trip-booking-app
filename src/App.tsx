import React, { useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import {
	Container,
	Col,
	Row,
} from 'react-bootstrap';

import { AppContext } from './store/Store';
import { themeDarkMode, themeLightMode } from './style/themes';
import { Spacer } from './components/layout/spacer/Spacer';
import { Header } from './components/header/Header';
import { TripLayout } from './components/layout/trip/TripLayout';

export const queryClient = new QueryClient();


function App() {
	const { state: { isDarkMode } } = useContext(AppContext);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={isDarkMode ? themeDarkMode : themeLightMode}>
				<GlobalStyle />

				<Container>
					<Spacer size={6}>
						<Header />
						<Row>
							<Col>
								<TripLayout />
							</Col>
						</Row>
					</Spacer>
				</Container>
			</ThemeProvider>

			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	);
}

export default App;
