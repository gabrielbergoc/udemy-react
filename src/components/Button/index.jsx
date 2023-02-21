import './styles.css';

const Button = ({ text, type, onClick, disabled }) => (
  <button type={type} onClick={onClick} className="button" disabled={disabled}>
    {text}
  </button>
);

export default Button;
