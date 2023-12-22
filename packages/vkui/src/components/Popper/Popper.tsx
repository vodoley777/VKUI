import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { usePrevious } from '../../hooks/usePrevious';
import {
  autoUpdateFloatingElement,
  convertFloatingDataToReactCSSProperties,
  type FloatingComponentProps,
  type Placement,
  useFloating,
  useFloatingMiddlewaresBootstrap,
  type VirtualElement,
} from '../../lib/floating';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import {
  DEFAULT_ARROW_HEIGHT,
  DEFAULT_ARROW_PADDING,
  DefaultIcon,
} from '../FloatingArrow/DefaultIcon';
import {
  FloatingArrow,
  type FloatingArrowProps as FloatingArrowPropsPrivate,
} from '../FloatingArrow/FloatingArrow';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Popper.module.css';

export type FloatingArrowProps = Omit<
  FloatingArrowPropsPrivate,
  'getRootRef' | 'coords' | 'placement' | 'Icon'
>;

type AllowedFloatingComponentProps = Pick<
  FloatingComponentProps,
  | 'arrow'
  | 'arrowRef'
  | 'arrowHeight'
  | 'arrowPadding'
  | 'hoverDelay'
  | 'placement'
  | 'offsetByMainAxis'
  | 'offsetByCrossAxis'
  | 'shown'
  | 'onShownChange'
  | 'defaultShown'
  | 'hideWhenReferenceHidden'
  | 'sameWidth'
  | 'zIndex'
  | 'usePortal'
  | 'customMiddlewares'
>;

export interface PopperCommonProps
  extends AllowedFloatingComponentProps,
    Omit<HTMLAttributesWithRootRef<HTMLDivElement>, keyof AllowedFloatingComponentProps> {
  /**
   * Позволяет набросить на стрелку пользовательские атрибуты.
   */
  arrowProps?: FloatingArrowProps;
  /**
   * Пользовательская SVG иконка.
   *
   * Требования:
   *
   * 1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).
   * 2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,
   *    растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.
   *    (см. https://github.com/VKCOM/VKUI/pull/4496).
   * 3. Передайте высоту иконки в параметр `arrowHeight`. В значении высоты можно исключить хак с `1px` из п.2.
   * 4. Убедитесь, что компонент принимает все валидные для SVG параметры.
   * 5. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.
   */
  ArrowIcon?: FloatingArrowPropsPrivate['Icon'];
  /**
   * Подписывается на изменение геометрии `targetRef`, чтобы пересчитать свою позицию.
   */
  autoUpdateOnTargetResize?: boolean;
  /**
   * В зависимости от области видимости, позиция может смениться на более оптимальную,
   * чтобы Popper вместился в эту область видимости.
   */
  onPlacementChange?(placement: Placement): void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef: React.RefObject<HTMLElement> | VirtualElement;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popper
 */
export const Popper = ({
  // UseFloatingMiddlewaresBootstrapProps
  placement: placementProp = 'bottom-start',
  sameWidth,
  hideWhenReferenceHidden,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  arrow,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  arrowPadding = DEFAULT_ARROW_PADDING,
  customMiddlewares,

  // UseFloatingProps
  autoUpdateOnTargetResize = false,

  // ArrowProps
  arrowProps,
  ArrowIcon = DefaultIcon,

  // rest
  targetRef,
  getRootRef,
  children,
  usePortal = true,
  style: styleProp,
  onPlacementChange,
  ...restProps
}: PopperProps) => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);

  const { strictPlacement, middlewares } = useFloatingMiddlewaresBootstrap({
    placement: placementProp,
    sameWidth,
    arrow,
    arrowRef,
    arrowHeight,
    arrowPadding,
    offsetByMainAxis,
    offsetByCrossAxis,
    hideWhenReferenceHidden,
    customMiddlewares,
  });

  const {
    x: floatingDataX,
    y: floatingDataY,
    strategy: floatingPositionStrategy,
    placement: resolvedPlacement,
    refs,
    middlewareData,
  } = useFloating({
    placement: strictPlacement,
    middleware: middlewares,
    whileElementsMounted(...args) {
      /* istanbul ignore next: не знаю как проверить */
      return autoUpdateFloatingElement(...args, {
        elementResize: autoUpdateOnTargetResize,
      });
    },
  });
  const { arrow: arrowCoords } = middlewareData;

  const handleRootRef = useExternRef<HTMLDivElement>(refs.setFloating, getRootRef);

  useIsomorphicLayoutEffect(() => {
    refs.setReference('current' in targetRef ? targetRef.current : targetRef);
  }, [refs.setReference, targetRef]);

  const prevResolvedPlacement = usePrevious(resolvedPlacement);
  useIsomorphicLayoutEffect(() => {
    if (prevResolvedPlacement === undefined || !onPlacementChange) {
      return;
    }
    if (prevResolvedPlacement !== resolvedPlacement) {
      onPlacementChange(resolvedPlacement);
    }
  }, [prevResolvedPlacement, resolvedPlacement, onPlacementChange]);

  const dropdown = (
    <RootComponent
      {...restProps}
      baseClassName={styles.host}
      getRootRef={handleRootRef}
      style={{
        ...styleProp,
        ...convertFloatingDataToReactCSSProperties(
          floatingPositionStrategy,
          floatingDataX,
          floatingDataY,
          sameWidth ? null : undefined,
          middlewareData,
        ),
      }}
    >
      {arrow && (
        <FloatingArrow
          {...arrowProps}
          coords={arrowCoords}
          placement={resolvedPlacement}
          getRootRef={setArrowRef}
          Icon={ArrowIcon}
        />
      )}
      {children}
    </RootComponent>
  );

  return <AppRootPortal usePortal={usePortal}>{dropdown}</AppRootPortal>;
};
