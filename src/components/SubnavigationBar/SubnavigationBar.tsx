import { FC } from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import HorizontalScroll, { HorizontalScrollProps } from '../HorizontalScroll/HorizontalScroll';

export interface SubnavigationBarProps extends HorizontalScrollProps {
  mode?: 'fixed' | 'overflow';
}

export const SubnavigationBar: FC<SubnavigationBarProps> = (props: SubnavigationBarProps) => {
  const platform = usePlatform();
  const {
    mode,
    children,
    ...restProps
  } = props;

  const ScrollWrapper = mode === 'fixed' ? 'div' : HorizontalScroll;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('SubnavigationBar', platform), `SubnavigationBar--${mode}`)}
    >
      <ScrollWrapper vkuiClass="SubnavigationBar__in" {...props}>
        <div vkuiClass="SubnavigationBar__scrollIn">
          <div vkuiClass="SubnavigationBar__gap" />
          {children}
          <div vkuiClass="SubnavigationBar__gap" />
        </div>
      </ScrollWrapper>
    </div>
  );
};

SubnavigationBar.defaultProps = {
  mode: 'overflow',
};
