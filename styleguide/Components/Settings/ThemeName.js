import * as React from 'react';
import { Icon20RectangleInfoOutline } from '@vkontakte/icons';
import { Link } from '@vkui';
import { generateVKUIConfigProviderTokensClassNamesCodeExamples } from '../../lib/theme';
import { CodeRenderer } from '../Code/CodeRenderer';
import { Setting } from '../Setting/Setting';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';

const Hint = () => {
  const { platform, themeName, appearance, appearanceOptions } =
    React.useContext(StyleGuideContext);

  const codeExamples = generateVKUIConfigProviderTokensClassNamesCodeExamples(
    platform,
    themeName,
    appearance,
    appearanceOptions,
  );

  return (
    <React.Fragment>
      {codeExamples.map((__html, index, arr) => (
        <React.Fragment key={index}>
          <CodeRenderer
            Component="pre"
            style={{ maxWidth: 320, overflowX: 'auto', overflowY: 'hidden' }}
            dangerouslySetInnerHTML={{ __html }}
          />
          {arr.length - 1 !== index ? 'или' : null}
        </React.Fragment>
      ))}
      см. <Link href="#/Customize">Кастомизация</Link>
    </React.Fragment>
  );
};

export const ThemeName = () => {
  const { themeName, setActiveModal } = React.useContext(StyleGuideContext);

  const onChangeValue = (changeValue) => {
    setActiveModal('themes');
  };
  return (
    <Setting hintMaxWidth="max-content" hint={<Hint />} label="themeName">
      <Link role="button" onClick={onChangeValue}>
        {themeName} <Icon20RectangleInfoOutline />
      </Link>
    </Setting>
  );
};
