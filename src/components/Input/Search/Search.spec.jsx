import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '.';
import { searchInputProps } from '../../../mocks/inputs';

describe('<SearchInput />', () => {
  it('should render correctly', () => {
    render(<SearchInput {...searchInputProps} />);

    const input = screen.getByPlaceholderText(searchInputProps.placeholder);

    expect(input).toHaveAttribute('type', 'search');
    expect(input).toHaveClass('search-input');
    expect(input).toHaveValue(searchInputProps.value);
  });

  it('should match snapshot', () => {
    const { container } = render(<SearchInput {...searchInputProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should call handleChange on each keypress', () => {
    render(<SearchInput {...searchInputProps} />);
    const userInput = 'user input';
    const fn = searchInputProps.handleChange;
    const input = screen.getByPlaceholderText(searchInputProps.placeholder);

    userEvent.type(input, userInput);

    expect(fn).toHaveBeenCalledTimes(userInput.length);
  });
});
