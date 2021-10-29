import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Store } from '../src/store/Store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/GlobalStyle';
import { themeDarkMode } from '../src/style/themes';
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient();

export const decorators = [
	Story => (
		<Store>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={themeDarkMode}>
					<GlobalStyle />
					<Story />
				</ThemeProvider>
			</QueryClientProvider>
		</Store>
	),
];


export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}