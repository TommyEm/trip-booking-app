import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TripLayout, ITripLayoutProps } from './TripLayout';

export default {
	title: 'Components/Layout/TripLayout',
	component: TripLayout,
} as Meta;


const Template: Story<ITripLayoutProps> = args => <TripLayout {...args} />;

export const Default = Template.bind({});
Default.args = {

};
