import * as React from 'react';
import { type AppRootUserSelectMode, type SafeAreaInsets } from './types';

export interface AppRootContextInterface {
  appRoot: React.RefObject<HTMLElement>;
  portalRoot: HTMLElement | null;
  popoutModalRoot: React.MutableRefObject<HTMLDivElement | null>;
  safeAreaInsets?: SafeAreaInsets;
  embedded: boolean;
  mode: 'partial' | 'embedded' | 'full';
  keyboardInput: boolean;
  disablePortal: boolean;
  layout?: 'card' | 'plain';
  userSelectMode?: AppRootUserSelectMode;
}

/**
 * Вынесен в константу, чтобы можно было в тестах создавать свой контекст и сливать перед этим значения по-умолчанию
 *
 * > Note: не смог убрать из покрытия через 'istanbul ignore next'.
 */
export const DEFAULT_APP_ROOT_CONTEXT_VALUE: AppRootContextInterface = {
  appRoot: React.createRef(),
  mode: 'full',
  portalRoot: null,
  popoutModalRoot: React.createRef(),
  safeAreaInsets: undefined,
  embedded: false,
  keyboardInput: false,
  disablePortal: false,
};

export const AppRootContext: React.Context<AppRootContextInterface> =
  React.createContext<AppRootContextInterface>(DEFAULT_APP_ROOT_CONTEXT_VALUE);
