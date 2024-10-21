import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Banner', alias);

  if (localName) {
    renameProp(j, source, localName, {
      subheader: 'subtitle',
      text: 'extraSubtitle',
      header: 'title',
    });
  }

  return source.toSource();
}