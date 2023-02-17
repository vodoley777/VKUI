import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Spinner, SpinnerProps } from './Spinner';

const story: Meta<SpinnerProps> = {
  title: 'Blocks/Spinner',
  component: Spinner,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('ScreenSpinner') },
  decorators: [withCartesian],
};

export default story;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
