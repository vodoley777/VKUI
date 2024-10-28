import { noop } from '@vkontakte/vkjs';
import { clamp } from '../../../helpers/math';
import { inRange } from '../../../helpers/range';
import { rubberbandIfOutOfBounds } from '../../animation';
import { hasSelectionWithRangeType } from '../../dom';
import { UIPanGestureRecognizer } from '../../touch/UIPanGestureRecognizer';
import {
  BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY,
  DRAG_THRESHOLDS,
  DYNAMIC_SNAP_POINT_DATA,
  SNAP_POINT_DETENTS,
  SNAP_POINT_SAFE_RANGE,
} from '../constants';
import type { CSSTransitionController } from './CSSTransitionController';

export type SnapPointDetents = [number, number] | [number, number, number];

export type BottomSheetControllerSnapPointData = {
  unit: '%' | 'px';
  currentSnapPoint: number;
  snapPointDetents: SnapPointDetents;
};

export type BottomSheetControllerOptions = {
  sheetScrollEl: HTMLElement | null;
  sheetTransitionController: CSSTransitionController<string>;
  backdropTransitionController: CSSTransitionController | null;
  onDismiss: VoidFunction;
};

export class BottomSheetController {
  static parseInitialSnapPoint(
    initialSnapPoint: 'auto' | number = SNAP_POINT_DETENTS.MEDIUM,
  ): BottomSheetControllerSnapPointData {
    if (initialSnapPoint === 'auto') {
      return {
        unit: 'px',
        currentSnapPoint: DYNAMIC_SNAP_POINT_DATA.IDLE_POINT_VALUE,
        snapPointDetents: [SNAP_POINT_DETENTS.MIN, DYNAMIC_SNAP_POINT_DATA.IDLE_POINT_VALUE],
      };
    }

    const currentSnapPoint = Math.min(
      Math.max(initialSnapPoint, SNAP_POINT_SAFE_RANGE.LOWER),
      SNAP_POINT_DETENTS.LARGE,
    );

    return {
      unit: '%',
      currentSnapPoint,
      snapPointDetents: inRange(
        currentSnapPoint,
        SNAP_POINT_SAFE_RANGE.LOWER,
        SNAP_POINT_SAFE_RANGE.HIGHEST,
      )
        ? [SNAP_POINT_DETENTS.MIN, currentSnapPoint, SNAP_POINT_DETENTS.LARGE]
        : [SNAP_POINT_DETENTS.MIN, currentSnapPoint],
    };
  }

  constructor(
    private readonly sheetEl: HTMLElement,
    {
      sheetScrollEl,
      sheetTransitionController,
      backdropTransitionController,
      onDismiss,
    }: BottomSheetControllerOptions,
  ) {
    this.onDismiss = onDismiss;
    this.panGestureRecognizer = new UIPanGestureRecognizer();
    this.sheetScrollEl = sheetScrollEl;
    this.sheetTransitionController = sheetTransitionController;
    this.backdropTransitionController = backdropTransitionController;
  }

  init(initialSnapPoint?: number | 'auto') {
    this.isInitialized = true;

    const { unit, currentSnapPoint, snapPointDetents } =
      BottomSheetController.parseInitialSnapPoint(initialSnapPoint);

    this.unit = unit;
    this.currentSnapPoint = currentSnapPoint;
    this.snapPointDetents = snapPointDetents;
  }

  destroy() {
    this.isInitialized = false;
    this.pannedEl = null;
    this.sheetTransitionController.cleanup();
    this.backdropTransitionController?.cleanup();

    this.disableScrollBouncingDispose();
    this.disableScrollBouncingDispose = noop;
  }

  panStart(event: UIEvent) {
    if (
      !this.isInitialized ||
      this.panState !== 'idle' ||
      event.defaultPrevented ||
      hasSelectionWithRangeType(event.target)
    ) {
      return;
    }

    this.panState = 'start';
    this.pannedEl = event.target as HTMLElement;
    this.panGestureRecognizer.setStartCoords(event);
  }

  panMove(event: UIEvent) {
    switch (this.panState) {
      case 'start':
        this.panGestureRecognizer.setInitialTimeOnce();
        this.panGestureRecognizer.setEndCoords(event);

        if (
          event.defaultPrevented ||
          this.shouldBePreventedIfPanGestureDistanceIsNotAsExpected() ||
          this.shouldBePreventedIfPanGestureDirectionIsNotVertical() ||
          // Может быть `null` если нажали на Shadow DOM.
          this.pannedEl === null ||
          this.shouldBePreventedIfPannedElIsExternal(this.pannedEl) ||
          this.shouldBePreventedByDataAttribute(this.pannedEl) ||
          this.shouldBePreventedIfIsScrolled(this.pannedEl)
        ) {
          return;
        }

        this.panState = 'moving';
        this.panGestureRecognizer.setStartCoords(event);

        this.disableScrollBouncingDispose = BottomSheetController.disableScrollBouncing(
          this.sheetScrollEl,
        );
        this.sheetHeight = this.sheetEl.offsetHeight;

        if (this.isDynamicSnapPoint) {
          this.currentSnapPoint = this.sheetHeight;
          this.snapPointDetents[DYNAMIC_SNAP_POINT_DATA.COMPUTED_INDEX] = this.sheetHeight;
        }
        break;
      case 'moving':
        if (event.cancelable) {
          event.preventDefault();
        }

        this.panGestureRecognizer.setEndCoords(event);

        const { y1, y2 } = this.panGestureRecognizer;

        this.nextSnapPoint = rubberbandIfOutOfBounds(
          this.currentSnapPoint - ((y2 - y1) / this.sheetHeight) * this.currentSnapPoint,
          SNAP_POINT_DETENTS.MIN,
          this.isDynamicSnapPoint ? this.sheetHeight : SNAP_POINT_DETENTS.LARGE,
        );

        this.calculateSnapPoint(this.nextSnapPoint, true);
        break;
    }
  }

  panEnd() {
    switch (this.panState) {
      case 'moving':
        this.currentSnapPoint = this.getSnapPointTo(this.nextSnapPoint);
        this.calculateSnapPoint(this.currentSnapPoint);
        break;
    }

    this.panState = 'idle';
    this.panGestureRecognizer.reset();

    this.disableScrollBouncingDispose();
    this.disableScrollBouncingDispose = noop;
  }

  private isInitialized = false;
  private panState: 'idle' | 'start' | 'moving' = 'idle';
  private pannedEl: HTMLElement | null = null;
  private sheetHeight = 0;
  private rafId: number | null = null;
  private currentSnapPoint = 0;
  private nextSnapPoint = 0;
  private snapPointDetents: SnapPointDetents = [0, 0];
  private unit: 'px' | '%' = '%';
  private get isDynamicSnapPoint() {
    return this.unit === 'px';
  }
  private disableScrollBouncingDispose = noop;
  private readonly sheetScrollEl: HTMLElement | null;
  private readonly sheetTransitionController: CSSTransitionController<string>;
  private readonly backdropTransitionController: CSSTransitionController | null;
  private readonly panGestureRecognizer: UIPanGestureRecognizer;
  private readonly onDismiss: VoidFunction;

  private calculateSnapPoint(nextSnapPoint: number, immediately = false) {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }

    if (nextSnapPoint <= SNAP_POINT_DETENTS.MIN) {
      this.sheetTransitionController.enableTransition();
      this.backdropTransitionController?.enableTransition();
      this.onDismiss();
      return;
    }

    const backdropOpacity = clamp(
      this.isDynamicSnapPoint
        ? nextSnapPoint / this.sheetHeight
        : (nextSnapPoint * 2) / SNAP_POINT_DETENTS.LARGE,
      0,
      1,
    );

    this.rafId = requestAnimationFrame(() => {
      if (immediately) {
        this.backdropTransitionController?.disableTransition().set(backdropOpacity);
        this.sheetTransitionController.disableTransition().set(`${nextSnapPoint}${this.unit}`);
        return;
      }

      if (this.isDynamicSnapPoint) {
        this.sheetTransitionController.cleanupOnTransitionEnd();
      }

      this.backdropTransitionController?.unset();
      this.sheetTransitionController.enableTransition().set(`${this.currentSnapPoint}${this.unit}`);
    });
  }

  private getSnapPointTo(nextSnapPoint: number) {
    const closestSnapPoint = BottomSheetController.getClosestSnapPoint(
      this.snapPointDetents,
      nextSnapPoint,
    );
    if (closestSnapPoint !== this.currentSnapPoint) {
      return closestSnapPoint;
    }

    const panDirection = this.panGestureRecognizer.direction();
    if (panDirection.axis !== 'y' || panDirection.direction === null) {
      return this.currentSnapPoint;
    }

    const velocity = this.panGestureRecognizer.velocity();
    if (Math.abs(velocity.y) < DRAG_THRESHOLDS.VELOCITY) {
      return this.currentSnapPoint;
    }

    const closestSnapPointByDirection = BottomSheetController.getClosestSnapPointByDirection(
      this.snapPointDetents,
      closestSnapPoint,
      panDirection.direction,
    );

    return closestSnapPointByDirection;
  }

  private shouldBePreventedIfPanGestureDistanceIsNotAsExpected() {
    return this.panGestureRecognizer.distance() < DRAG_THRESHOLDS.DISTANCE_FOR_MOVING_START;
  }

  private shouldBePreventedIfPanGestureDirectionIsNotVertical() {
    return this.panGestureRecognizer.direction().axis === 'x';
  }

  private shouldBePreventedIfPannedElIsExternal(pannedEl: HTMLElement) {
    return !this.sheetEl.contains(pannedEl);
  }

  private shouldBePreventedByDataAttribute(pannedEl: HTMLElement) {
    // eslint-disable-next-line no-restricted-properties
    return pannedEl.closest(`[${BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY}=true]`);
  }

  private shouldBePreventedIfIsScrolled(pannedEl: HTMLElement) {
    if (this.sheetScrollEl === null || !this.sheetScrollEl.contains(pannedEl)) {
      return false;
    }

    if (this.sheetScrollEl.scrollTop === 0) {
      const panDirection = this.panGestureRecognizer.direction();
      return panDirection.direction === -1;
    }

    return true;
  }

  private static disableScrollBouncing(node: HTMLElement | null) {
    if (node === null) {
      return noop;
    }
    node.style.setProperty('overflow', 'hidden');
    return function dispose() {
      node.style.removeProperty('overflow');
    };
  }

  private static getClosestSnapPointByDirection(
    snapPointDetents: SnapPointDetents,
    currentY: number,
    direction: -1 | 1,
  ): number {
    const foundIndex = snapPointDetents.findIndex((i) => i === currentY);
    switch (direction) {
      case -1:
        return snapPointDetents[foundIndex + 1] ?? snapPointDetents[snapPointDetents.length - 1];
      case 1:
        return snapPointDetents[foundIndex - 1] ?? snapPointDetents[0];
    }
  }

  private static getClosestSnapPoint(snapPointDetents: SnapPointDetents, currentY: number) {
    let closest = snapPointDetents[0];
    let minDifference = Math.abs(snapPointDetents[0] - currentY);

    for (let i = 1; i < snapPointDetents.length; i += 1) {
      const difference = Math.abs(snapPointDetents[i] - currentY);
      if (difference < minDifference) {
        closest = snapPointDetents[i];
        minDifference = difference;
      }
    }

    return closest;
  }
}
