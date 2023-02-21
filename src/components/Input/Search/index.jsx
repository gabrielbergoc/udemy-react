import './styles.css';

const SearchInput = ({ handleChange, value, placeholder }) => (
  <input
    type="search"
    className="search-input"
    onChange={handleChange}
    value={value}
    placeholder={placeholder ?? 'Search...'}
  />
);

export default SearchInput;
