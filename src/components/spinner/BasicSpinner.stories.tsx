import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BasicSpinner, IBasicSpinnerProps } from './BasicSpinner';

export default {
	title: 'Components/Spinner/Basic',
	component: BasicSpinner,
} as Meta;


const Template: Story<IBasicSpinnerProps> = args => <BasicSpinner {...args} />;

export const Default = Template.bind({});
