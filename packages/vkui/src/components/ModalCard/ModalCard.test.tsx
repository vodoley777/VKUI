import { render, screen } from '@testing-library/react';
import { baselineComponent, waitCSSTransitionEnd } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ModalCard } from './ModalCard';

export const waitModalCardCSSTransitionEnd = async (el: HTMLElement) =>
  await waitCSSTransitionEnd(el);

describe(ModalCard, () => {
  baselineComponent((p) => <ModalCard open nav="id" {...p} />, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
    a11y: false,
  });

  test('mount and unmount', async () => {
    const result = render(<ModalCard id="host" data-testid="host" />);
    expect(result.queryByTestId('host')).not.toBeInTheDocument();

    result.rerender(<ModalCard open id="host" data-testid="host" />);
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.getByTestId('host')).toBeInTheDocument();

    result.rerender(<ModalCard id="host" data-testid="host" />);
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('host')).not.toBeInTheDocument();
  });

  test('testid for modal card content', async () => {
    const result = render(<ModalCard open nav="host" data-testid="host" />);
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ModalCard
        nav="id"
        open
        data-testid="host"
        modalDismissButtonTestId="modal-dismiss-button"
      />,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ConfigProvider platform="vkcom">
        <ModalCard
          nav="host"
          open
          data-testid="host"
          modalDismissButtonTestId="modal-dismiss-button"
        />
      </ConfigProvider>,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).toBeTruthy();
  });

  test('can specify tags for header and subheader', async () => {
    const result = render(
      <ModalCard
        open
        data-testid="host"
        title="Баскетбол на выходных"
        description="Приглашение в беседу"
      />,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(screen.getByText('Баскетбол на выходных').tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('Приглашение в беседу').tagName.toLowerCase()).toMatch('span');

    result.rerender(
      <ModalCard
        open
        data-testid="host"
        title="Баскетбол на выходных"
        titleComponent="h2"
        description="Приглашение в беседу"
        descriptionComponent="h3"
      />,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(screen.getByText('Баскетбол на выходных').tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Приглашение в беседу').tagName.toLowerCase()).toMatch('h3');
  });
});
