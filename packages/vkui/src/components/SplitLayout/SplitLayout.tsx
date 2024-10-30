'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasRef, HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import styles from './SplitLayout.module.css';

export interface SplitLayoutProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   */
  popout?: React.ReactNode;
  /**
   * Свойство для отрисовки `ModalRoot`.
   */
  modal?: React.ReactNode;
  header?: React.ReactNode;
  /**
   * Центрирует контент.
   */
  center?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitLayout
 */
export const SplitLayout = ({
  header,
  children,
  getRootRef,
  getRef,
  className,
  center,
  ...restProps
}: SplitLayoutProps): React.ReactNode => {
  const platform = usePlatform();
  const { popoutModalRoot } = React.useContext(AppRootContext);

  const rootRef = useExternRef<HTMLDivElement>(popoutModalRoot, getRootRef);

  return (
    <div className={classNames(styles.host, platform === 'ios' && styles.ios)} ref={rootRef}>
      {header}
      <div
        {...restProps}
        ref={getRef}
        className={classNames(
          styles.inner,
          !!header && styles.innerHeader,
          center && styles.innerCenter,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
