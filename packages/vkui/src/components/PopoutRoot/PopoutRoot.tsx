import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutRoot.module.css';

/**
 * @private
 */
export const PopoutRootPopout = ({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>): React.ReactNode => (
  <div className={classNames(styles.popout, className)} {...restProps} />
);

export interface PopoutRootProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

/**
 * @private
 */
export const PopoutRoot = ({
  popout,
  modal,
  children,
  ...restProps
}: PopoutRootProps): React.ReactNode => {
  return (
    <RootComponent {...restProps} baseClassName={styles.host}>
      {children}
      <AppRootPortal>
        {!!popout && <PopoutRootPopout>{popout}</PopoutRootPopout>}
        {!!modal && modal}
      </AppRootPortal>
    </RootComponent>
  );
};
