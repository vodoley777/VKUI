'use client';

import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import styles from './ModalPageFooter.module.css';

export interface ModalPageFooterProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  noSeparator?: boolean;
}

export const ModalPageFooter = ({
  noSeparator = false,
  children,
  ...restProps
}: ModalPageFooterProps) => {
  const { sizeX } = useAdaptivityWithJSMediaQueries();
  return (
    <RootComponent baseClassName={styles.host} {...restProps}>
      {!noSeparator && <Separator padding={sizeX !== 'regular'} />}
      <div className={styles.inner}>{children}</div>
    </RootComponent>
  );
};
