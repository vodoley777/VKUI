import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { NativeSelectPlayground } from './NativeSelect.e2e-playground';

test('NativeSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<NativeSelectPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
