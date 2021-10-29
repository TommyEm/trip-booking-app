import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Layout, ILayoutProps } from './Layout';

export default {
	title: 'Components/Layout',
	component: Layout,
} as Meta;


const Template: Story<ILayoutProps> = args => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {

};
