import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { HorizontalCellShowMore } from './HorizontalCellShowMore';
import styles from './HorizontalCellShowMore.module.css';

describe('HorizontalCellShowMore', () => {
  baselineComponent(HorizontalCellShowMore);

  it('properly renders default and custom text in different sizes', async () => {
    const component = render(<HorizontalCellShowMore size="s" />);

    // renders Все by default in size "s"
    await screen.findByText('Все');
    expect(screen.queryByText('Показать все')).toBeFalsy();

    component.rerender(<HorizontalCellShowMore size="m" />);
    // renders Показать все by default in size "m"
    await screen.findByText('Показать все');
    expect(screen.queryByText('Все')).toBeFalsy();

    component.rerender(<HorizontalCellShowMore size="l" />);
    // renders Показать все by default in size "l"
    await screen.findByText('Показать все');
    expect(screen.queryByText('Все')).toBeFalsy();

    component.rerender(<HorizontalCellShowMore size="l">Show more</HorizontalCellShowMore>);
    // renders custom text
    await screen.findByText('Show more');
    expect(screen.queryByText('Все')).toBeFalsy();
    expect(screen.queryByText('Показать все')).toBeFalsy();
  });

  it('should have specific className when stretched=true', () => {
    const component = render(<HorizontalCellShowMore data-testid="show-more" stretched={true} />);
    expect(component.getByTestId('show-more').parentElement).toHaveClass(
      styles['HorizontalCellShowMore--stretched'],
    );
  });
});
