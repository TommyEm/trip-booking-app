import React, { useContext, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import {
	ToggleButton,
	Container,
	Col,
	Row,
} from 'react-bootstrap';

import { themeDarkMode, themeLightMode } from './style/themes';
import { AppContext, Store } from './store/Store';
// import * as actions from './store/actionTypes';
import { Layout } from './components/layout/Layout';
import { Header } from './components/header/Header';

export const queryClient = new QueryClient();


function App() {
	const { state: { isDarkMode, theme } } = useContext(AppContext);
	// const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
	// const [theme, setTheme] = useState(themeDarkMode);

	// const toggleThemeMode = () => {
	// 	setTheme(isDarkMode ? themeLightMode : themeDarkMode);
	// 	// setIsDarkMode(!isDarkMode);
	// 	dispatch({ type: actions.UPDATE_THEME_MODE, payload: !isDarkMode });
	// };

	return (
		<Store>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={isDarkMode ? themeLightMode : themeDarkMode}>
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
		</Store>
	);
}

export default App;
