import Button from "./button";
import '../styles/confirm.css';
import { useRef, useEffect } from "react";

const Confirm = ({ title, message, onCancel, onConfirm, confirmIsCTA = true, optionCancel = "Cancel", optionConfirm = "Confirm" }) => {
  const cancelKeys = ["Escape"];
  const confirmKeys = ["Enter"," "];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (cancelKeys.includes(e.key)) {
        onCancel();
      } else if (confirmKeys.includes(e.key)) {
        onConfirm();
      }
    }
    document.addEventListener('keydown',handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const mainWindowArea = useRef();
  const handleClickOutside = (e) => {
    if (mainWindowArea.current && !mainWindowArea.current.contains(e.target)) {
      onCancel();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="confirm-mask">
      <form className="confirm-box padding-inline" ref={mainWindowArea}>
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