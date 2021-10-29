import React from 'react';
import {
	cleanup,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../App';

import * as stories from '../TripForm.stories';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = (
	<QueryClientProvider client={queryClient}>
		<Default />
	</QueryClientProvider>
);

it('should render a trip form', () => {
	render(storyComponent);
	setTimeout(
		() => expect(screen.getByTestId('test-TripForm')).toBeVisible(),
		1000
	);
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});
