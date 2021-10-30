import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TripForm, ITripFormProps } from './TripForm';

export default {
	title: 'Components/Form/TripForm',
	component: TripForm,
} as Meta;


const Template: Story<ITripFormProps> = args => <TripForm {...args} />;

export const Default = Template.bind({});
Default.args = {

};
