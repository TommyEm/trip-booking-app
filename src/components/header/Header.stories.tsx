import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, IHeaderProps } from './Header';

export default {
	title: 'Components/Header',
	component: Header,
} as Meta;


const Template: Story<IHeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {

};
