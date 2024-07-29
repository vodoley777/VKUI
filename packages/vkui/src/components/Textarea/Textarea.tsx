import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { useDOM } from '../../lib/dom';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { UnstyledTextField } from '../UnstyledTextField/UnstyledTextField';
import { useResizeTextarea } from './useResizeTextarea';
import styles from './Textarea.module.css';

const DEFAULT_MAX_HEIGHT = 204;

const sizeYClassNames = {
  none: styles['Textarea--sizeY-none'],
  ['compact']: styles['Textarea--sizeY-compact'],
};

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onResize'>,
    HasRef<HTMLTextAreaElement>,
    HasRootRef<HTMLElement>,
    Pick<React.CSSProperties, 'maxHeight'>,
    HasAlign,
    FormFieldProps {
  grow?: boolean;
  onResize?: (el: HTMLTextAreaElement) => void;
  defaultValue?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Textarea
 */
export const Textarea = ({
  grow = true,
  style,
  onResize,
  className,
  getRootRef,
  getRef,
  rows = 2,
  maxHeight,
  status,
  onChange,
  align,
  mode,
  after,
  before,
  afterAlign,
  beforeAlign,
  ...restProps
}: TextareaProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();
  const { window } = useDOM();

  const [refResizeTextarea, resize] = useResizeTextarea(onResize, grow);
  const elementRef = useExternRef(getRef, refResizeTextarea);

  React.useEffect(resize, [resize, sizeY, platform]);
  useGlobalEventListener(window, 'resize', resize);

  return (
    <FormField
      className={classNames(
        styles['Textarea'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        align === 'right' && styles['Textarea--align-right'],
        align === 'center' && styles['Textarea--align-center'],
        className,
      )}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
      status={status}
      mode={mode}
      after={after}
      before={before}
      afterAlign={afterAlign}
      beforeAlign={beforeAlign}
      maxHeight={maxHeight || DEFAULT_MAX_HEIGHT}
    >
      <UnstyledTextField
        {...restProps}
        as="textarea"
        rows={rows}
        className={styles['Textarea__el']}
        onChange={callMultiple(onChange, resize)}
        getRootRef={elementRef}
      />
    </FormField>
  );
};
