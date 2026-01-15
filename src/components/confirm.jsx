import Button from "./button";
import '../styles/confirm.css';

const Confirm = ({ title, message, onCancel, onConfirm, confirmIsCTA = true, optionCancel = "Cancel", optionConfirm = "Confirm" }) => {
  return (
    <div className="confirm-mask">
      <form className="confirm-box padding-inline">
        <h1 className="color-charcoal">{title}</h1>
        <p className="color-charcoal">{message}</p>
        <div className="confirm-buttons">
          <Button isCTA={!confirmIsCTA} onClick={onCancel}>{optionCancel}</Button>
          <Button isCTA={confirmIsCTA} onClick={onConfirm}>{optionConfirm}</Button>
        </div>
      </form>
    </div>
  )
}

export default Confirm;