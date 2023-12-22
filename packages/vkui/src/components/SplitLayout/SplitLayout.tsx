import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HTMLAttributesWithRootRef } from '../../types';
import { PopoutRoot } from '../PopoutRoot/PopoutRoot';
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
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitLayout
 */
export const SplitLayout = ({
  popout,
  modal,
  header,
  children,
  getRootRef,
  getRef,
  className,
  ...restProps
}: SplitLayoutProps) => {
  const platform = usePlatform();

  return (
    <PopoutRoot
      className={classNames(styles.host, platform === 'ios' && styles.hostIos)}
      popout={popout}
      modal={modal}
      getRootRef={getRootRef}
    >
      {header}
      <div
        {...restProps}
        ref={getRef}
        className={classNames(styles.inner, !!header && styles.innerHeader, className)}
      >
        {children}
      </div>
    </PopoutRoot>
  );
};
