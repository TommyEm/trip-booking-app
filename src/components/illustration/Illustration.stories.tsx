import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Illustration, IIllustrationProps } from './Illustration';

export default {
	title: 'Components/Illustration',
	component: Illustration,
} as Meta;


const Template: Story<IIllustrationProps> = args => <Illustration {...args} />;

export const Default = Template.bind({});
