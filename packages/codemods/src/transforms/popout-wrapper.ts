import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { report } from '../report';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PopoutWrapper', alias);

  const components = source.find(
    j.JSXOpeningElement,
    (element) => element.name.type === 'JSXIdentifier' && element.name.name === localName,
  );

  if (components.size() > 0) {
    report(
      api,
      `: When using ${chalk.white.bgBlue(
        'PopoutWrapper',
      )} you might need to apply useScrollLock() hook manually.`,
    );
  }

  components
    .find(j.JSXAttribute, (attribute) => attribute.name.name === 'hasMask')
    .forEach((attribute) => {
      const node = attribute.node;

      if (!node.value) {
        j(attribute).remove();
      } else if (
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression.type === 'BooleanLiteral'
      ) {
        if (node.value.expression.value) {
          j(attribute).remove();
        } else {
          j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('noBackground')));
        }
      }
    });

  return source.toSource();
}
