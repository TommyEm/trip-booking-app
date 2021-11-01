import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Notification, INotificationProps } from './Notification';

export default {
	title: 'Components/Notification',
	component: Notification,
} as Meta;


const Template: Story<INotificationProps> = args => <Notification {...args} />;

export const Default = Template.bind({});
