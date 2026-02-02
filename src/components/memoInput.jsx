import "../styles/input.css";
import InputBase from "./inputBase";
import { useReserveState, useReserveDispatch } from "./context/reserveContext";

const MemoInput = ({ id, caption, placeholder, numLines, maxChars, isRequired=false }) => {
  const value = useReserveState().additionalInfo;
  const dispatch = useReserveDispatch();

  function renderCharsRemaining() {
    const currentLength = value ? value.length : 0;
    const criticalThreshold = maxChars / 10;
    const remaining = maxChars - currentLength;
    const className = (remaining > criticalThreshold) ? "color-green" : "color-peach";
    return (
      <div className="char-counter">
        <p className="input-caption color-green">Characters remaining: <span className={className}>{remaining}</span>/{maxChars}</p>
      </div>
    );
  }

  const handleChange = (e) => dispatch({ type: "setTextField", field: "additionalInfo", value: e.target.value });
  return (
    <InputBase id={id} className="memo-wrapper" caption={caption} isRequired={isRequired} tabIndex={-1}>
      {renderCharsRemaining()}
      <textarea className="memo-input input-font" placeholder={placeholder} rows={numLines} maxlength={maxChars} value={value} onChange={handleChange} />
    </InputBase>
  );
}

export default MemoInput;