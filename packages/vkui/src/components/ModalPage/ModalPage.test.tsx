import { render } from '@testing-library/react';
import { baselineComponent, waitCSSTransitionEnd } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ModalPage } from './ModalPage';

export const waitModalPageCSSTransitionEnd = async (el: HTMLElement) =>
  await waitCSSTransitionEnd(
    el && el.firstElementChild instanceof HTMLElement ? el.firstElementChild : null,
  );

describe(ModalPage, () => {
  baselineComponent((props) => <ModalPage open nav="id" {...props} />, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
    a11y: false,
  });

  test('mount and unmount', async () => {
    const result = render(<ModalPage id="host" data-testid="host" />);
    expect(result.queryByTestId('host')).not.toBeInTheDocument();

    result.rerender(<ModalPage open id="host" data-testid="host" />);
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.getByTestId('host')).toBeInTheDocument();

    result.rerender(<ModalPage id="host" data-testid="host" />);
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('host')).not.toBeInTheDocument();
  });

  test('testid for modal page content', async () => {
    const result = render(<ModalPage open nav="host" data-testid="modal-page-id" />);
    await waitModalPageCSSTransitionEnd(result.getByTestId('modal-page-id'));
    expect(result.queryByTestId('modal-content-id')).not.toBeTruthy();
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ModalPage
        nav="id"
        open
        data-testid="modal-page-id"
        modalContentTestId="modal-content-id"
        modalDismissButtonTestId="modal-dismiss-button"
      />,
    );
    await waitModalPageCSSTransitionEnd(result.getByTestId('modal-page-id'));
    expect(result.queryByTestId('modal-content-id')).toBeTruthy();
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ConfigProvider platform="vkcom">
        <ModalPage
          nav="host"
          open
          data-testid="modal-page-id"
          modalDismissButtonTestId="modal-dismiss-button"
        />
      </ConfigProvider>,
    );
    await waitModalPageCSSTransitionEnd(result.getByTestId('modal-page-id'));
    expect(result.queryByTestId('modal-dismiss-button')).toBeTruthy();
  });
});
