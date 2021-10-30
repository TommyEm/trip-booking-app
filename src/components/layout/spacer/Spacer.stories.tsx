import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Spacer, ISpacerProps } from './Spacer';

export default {
	title: 'Components/Layout/Spacer',
	component: Spacer,
} as Meta;


const Template: Story<ISpacerProps> = args => <Spacer {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<div>Spaced element</div>
			<div>Spaced element</div>
			<div>Spaced element</div>
		</>
	),
};
