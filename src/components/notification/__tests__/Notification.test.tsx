import React from 'react';
import {
	cleanup,
	render,
	screen
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../Notification.stories';

const { Default } = composeStories(stories);


afterEach(cleanup);
const storyComponent = <Default />;

it('should render a notification', () => {
	render(storyComponent);
	expect(screen.getByTestId('test-Notification')).toBeVisible();
});

it('matches snapshot', () => {
	const tree = render(storyComponent);
	expect(tree).toMatchSnapshot();
});
