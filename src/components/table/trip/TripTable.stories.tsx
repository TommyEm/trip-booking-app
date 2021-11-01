import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TripTable, ITripTable } from './TripTable';

export default {
	title: 'Components/Table/TripTable',
	component: TripTable,
} as Meta;

const Template: Story<ITripTable> = args => <TripTable {...args} />;

export const Filled = Template.bind({});
Filled.args = {
	departureStop: 'Le Marais',
};
