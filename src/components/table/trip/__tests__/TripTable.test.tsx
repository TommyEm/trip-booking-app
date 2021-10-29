import React from 'react';
import {
	cleanup,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../App';

import * as stories from '../TripTable.stories';

const { Empty, Filled } = composeStories(stories);


afterEach(cleanup);
const storyComponent = (
	<QueryClientProvider client={queryClient}>
		<Filled />
	</QueryClientProvider>
);

it('should render an empty list', () => {
	render(<QueryClientProvider client={queryClient}><Empty /></QueryClientProvider>);
	setTimeout(
		() => expect(screen.getByText(/Please select a departure stop/i)).toBeInTheDocument(),
		1000,
	);
});

it('should render a filled list', () => {
	render(storyComponent);
	setTimeout(
		() => expect(screen.getByTestId('test-TripTable')).toBeVisible(),
		1000,
	)
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});
