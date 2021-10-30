import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ToggleModeButton, IToggleModeButtonProps } from './ToggleModeButton';

export default {
	title: 'Components/Button/ToggleMode',
	component: ToggleModeButton,
} as Meta;


const Template: Story<IToggleModeButtonProps> = args => <ToggleModeButton {...args} />;

export const Default = Template.bind({});
