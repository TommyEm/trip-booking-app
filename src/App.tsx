import React, { useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import {
	Container,
	Col,
	Row,
} from 'react-bootstrap';

import { themeDarkMode, themeLightMode } from './style/themes';
import { AppContext } from './store/Store';
import { Layout } from './components/layout/Layout';
import { Header } from './components/header/Header';

export const queryClient = new QueryClient();


function App() {
	const { state: { isDarkMode } } = useContext(AppContext);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={isDarkMode ? themeDarkMode : themeLightMode}>
				<GlobalStyle />

				<Container>
					<Header />
					<Row>
						<Col>
							<Layout />
						</Col>
					</Row>
				</Container>
			</ThemeProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
