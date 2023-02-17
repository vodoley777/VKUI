import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { SelectProps } from '../CustomSelect/CustomSelect';
import { Select } from './Select';

const story: Meta<SelectProps> = {
  title: 'Forms/Select',
  component: Select,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  style: { width: 300 },
};
