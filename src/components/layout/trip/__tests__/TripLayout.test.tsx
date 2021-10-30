import React from 'react';
import {
	cleanup,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../App';

import * as stories from '../TripLayout.stories';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = (
	<QueryClientProvider client={queryClient}>
		<Default />
	</QueryClientProvider>
);

it('should render a layout', () => {
	render(storyComponent);
	expect(screen.getByTestId('test-TripLayout')).toBeVisible();
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});
