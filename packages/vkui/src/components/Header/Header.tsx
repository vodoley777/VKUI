import * as React from 'react';
import { classNames, hasReactNode, isPrimitiveReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import styles from './Header.module.css';

export interface HeaderProps extends HTMLAttributesWithRootRef<HTMLElement>, HasComponent {
  mode?: 'primary' | 'secondary' | 'tertiary';
  size?: 'regular' | 'large';
  subtitle?: React.ReactNode;
  /* Позволяет задать тип элемента в который будет обёрнут subtitle */
  subtitleComponent?: React.ElementType;
  /**
   * Допускаются иконки, текст, Link
   */
  aside?: React.ReactNode;
  /**
   * Допускаются текст, Indicator
   */
  indicator?: React.ReactNode;
  multiline?: boolean;
  /**
   * Иконка слева (рекомендуется использовать размер 28px)
   */
  before?: React.ReactElement;
  /**
   * Иконка слева от title (рекомендуется использовать размер 16px)
   */
  beforeTitle?: React.ReactElement;
  /**
   * Иконка справа от title (рекомендуется использовать размер 16px)
   */
  afterTitle?: React.ReactElement;
  /**
   * Иконка слева от subtitle (рекомендуется использовать размер 12px)
   */
  beforeSubtitle?: React.ReactElement;
  /**
   * Иконка справа от subtitle (рекомендуется использовать размер 12px)
   */
  afterSubtitle?: React.ReactElement;
}

type HeaderContentProps = Pick<HeaderProps, 'children' | 'mode' | 'size' | 'className'> &
  HasComponent;

const HeaderContent = ({ mode, size, ...restProps }: HeaderContentProps) => {
  const isLarge = size === 'large';

  const platform = usePlatform();
  if (platform === 'ios') {
    switch (mode) {
      case 'primary':
        return isLarge ? (
          <Title level="2" weight="2" {...restProps} />
        ) : (
          <Title weight="1" level="3" {...restProps} />
        );
      case 'secondary':
        return <Footnote weight="1" caps {...restProps} />;
      case 'tertiary':
        return <Title weight="1" level="3" {...restProps} />;
    }
  }

  switch (mode) {
    case 'primary':
      return isLarge ? (
        <Title level="2" weight="2" {...restProps} />
      ) : (
        <Headline weight="2" {...restProps} />
      );
    case 'secondary':
      return <Footnote weight="1" caps {...restProps} />;
    case 'tertiary':
      return <Headline weight="2" {...restProps} />;
  }

  return null;
};

const stylesMode = {
  primary: styles['Header--mode-primary'],
  secondary: styles['Header--mode-secondary'],
  tertiary: styles['Header--mode-tertiary'],
};
/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export const Header = ({
  mode = 'primary',
  size = 'regular',
  Component = 'h2',
  children,
  subtitle,
  subtitleComponent = 'span',
  indicator,
  aside,
  multiline,
  before,
  beforeTitle,
  afterTitle,
  beforeSubtitle,
  afterSubtitle,
  ...restProps
}: HeaderProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['Header'],
        stylesMode[mode],
        size === 'large' && styles['Header--large'],
        isPrimitiveReactNode(indicator) && styles['Header--pi'],
        hasReactNode(subtitle) && styles['Header--with-subtitle'],
      )}
    >
      {before && (
        <div
          className={classNames(
            styles['Header__before'],
            subtitle && styles['Header__before--withSubtitle'],
          )}
        >
          {before}
        </div>
      )}
      <div className={styles['Header__main']}>
        <HeaderContent
          className={styles['Header__content']}
          Component={Component}
          mode={mode}
          size={size}
        >
          {beforeTitle && <div className={styles['Header__content__before']}>{beforeTitle}</div>}
          <span
            className={classNames(
              styles['Header__content-in'],
              multiline && styles['Header__content--multiline'],
            )}
          >
            {children}
          </span>
          {afterTitle && <div className={styles['Header__content__after']}>{afterTitle}</div>}
          {hasReactNode(indicator) && (
            <Footnote className={styles['Header__indicator']} weight="2">
              {indicator}
            </Footnote>
          )}
        </HeaderContent>
        {hasReactNode(subtitle) && (
          <div className={styles['Header__subtitleWrapper']}>
            {beforeSubtitle && (
              <div className={styles['Header__subtitleBefore']}>{beforeSubtitle}</div>
            )}
            <Subhead
              className={classNames(
                styles['Header__subtitle'],
                multiline && styles['Header__content--multiline'],
              )}
              Component={subtitleComponent}
            >
              {subtitle}
            </Subhead>
            {afterSubtitle && (
              <div className={styles['Header__subtitleAfter']}>{afterSubtitle}</div>
            )}
          </div>
        )}
      </div>

      {hasReactNode(aside) && (
        <Paragraph className={styles['Header__aside']} Component="span">
          {aside}
        </Paragraph>
      )}
    </RootComponent>
  );
};
