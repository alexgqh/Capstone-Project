import '../styles/errorMessage.css';
import IconErrorMessage from '../assets/icon-error-message.svg';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <img className="error-icon" src={IconErrorMessage} alt="Error message icon" />
      <p className="error-text">{message}</p>
    </div>
  )
}

export default ErrorMessage;