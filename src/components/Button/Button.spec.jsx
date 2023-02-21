import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';
import { buttonProps } from '../../mocks/button';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button {...buttonProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should render with given text', () => {
    expect.assertions(1); // important in async tests
    render(<Button {...buttonProps} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should call prop function on click', () => {
    const fn = jest.fn();
    render(<Button {...buttonProps} onClick={fn} />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled if disabled=true', () => {
    render(<Button {...buttonProps} disabled={true} />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should NOT be disabled if disabled=false', () => {
    render(<Button {...buttonProps} disabled={false} />);

    const button = screen.getByRole('button');

    expect(button).toBeEnabled();
  });
});
