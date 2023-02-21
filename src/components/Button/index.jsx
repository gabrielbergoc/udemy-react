import P from 'prop-types';
import './styles.css';

const Button = ({ text, type = 'submit', onClick, disabled = false }) => (
  <button type={type} onClick={onClick} className="button" disabled={disabled}>
    {text}
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  type: P.string,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

export default Button;
