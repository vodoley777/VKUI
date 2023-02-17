import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { File, FileProps } from './File';

const story: Meta<FileProps> = {
  title: 'Forms/File',
  component: File,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms') },
  decorators: [withCartesian],
};

export default story;

const Template: Story<FileProps> = (args) => <File {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
