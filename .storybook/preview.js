import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient();

export const decorators = [
	Story => (
		<QueryClientProvider client={queryClient}>
			<Story />
		</QueryClientProvider>
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