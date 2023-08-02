import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CellPlayground } from './Cell.e2e-playground';

test('Cell', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<CellPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
