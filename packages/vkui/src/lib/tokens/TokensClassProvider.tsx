import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useTokensClassName } from './useTokenClassName';

type ProvidedChildProps = {
  className?: string;
};

type InjectTokenClassNameToChildProps = {
  children: React.ReactElement<ProvidedChildProps>;
};

const InjectTokenClassNameToChild = ({ children }: InjectTokenClassNameToChildProps) => {
  const tokensClassName = useTokensClassName();

  return React.cloneElement(children, {
    className: classNames(tokensClassName, 'vkui__typography', children.props.className),
  });
};

export interface TokensClassProviderProps {
  children: React.ReactNode;
}

export const TokensClassProvider: React.FC<TokensClassProviderProps> = ({ children }) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement<ProvidedChildProps>(child)) {
      return <InjectTokenClassNameToChild>{child}</InjectTokenClassNameToChild>;
    }
    return child;
  });
};
