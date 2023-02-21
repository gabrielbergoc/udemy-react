import P from 'prop-types';
import './styles.css';

const SearchInput = ({ handleChange, value, placeholder }) => (
  <input
    type="search"
    className="search-input"
    onChange={handleChange}
    value={value}
    placeholder={placeholder}
  />
);

// alternative way of defining default values
SearchInput.defaultProps = {
  value: '',
  placeholder: 'Search...',
};

SearchInput.propTypes = {
  handleChange: P.func.isRequired,
  value: P.string.isRequired,
  placeholder: P.string,
}

export default SearchInput;
