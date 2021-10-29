import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, ITitleProps } from './Title';

export default {
	title: 'Components/Typography/Title',
	component: Title,
} as Meta;


const Template: Story<ITitleProps> = args => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Title'
};
