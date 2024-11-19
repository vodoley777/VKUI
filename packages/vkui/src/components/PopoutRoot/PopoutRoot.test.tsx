import { baselineComponent } from '../../testing/utils';
import { PopoutRoot, PopoutRootPopout } from './PopoutRoot';

describe(PopoutRoot, () => {
  baselineComponent(PopoutRoot);
});

describe(PopoutRootPopout, () => {
  baselineComponent(PopoutRootPopout, { getRootRef: false });
});
