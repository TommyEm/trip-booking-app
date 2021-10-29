import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { themeDarkMode, themeLightMode } from './style/themes';
import { GlobalStyle } from './style/GlobalStyle';
import {
	Button,
	Container,
	Col,
	Row,
} from 'react-bootstrap';

import { Store } from './store/Store';
import { Layout } from './components/layout/Layout';
import { Title } from './components/typography/title/Title';

export const queryClient = new QueryClient();


function App() {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
	const [theme, setTheme] = useState(themeDarkMode);

	const toggleThemeMode = () => {
		setTheme(isDarkMode ? themeLightMode : themeDarkMode);
		setIsDarkMode(!isDarkMode);
	}

	return (
		<Store>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />

					<Container>
						<Row>
							<Col>
								<Title>Trip Booking</Title>
								<Button onClick={toggleThemeMode}>Toggle</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<Layout />
							</Col>
						</Row>
					</Container>
				</ThemeProvider>

				<ReactQueryDevtools />
			</QueryClientProvider>
		</Store>
	);
}

export default App;
