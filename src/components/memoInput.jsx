import "../styles/input.css";
import InputBase from "./inputBase";
import { useReserveState, useReserveDispatch } from "./context/reserveContext";

const MemoInput = ({ id, caption, placeholder, numLines, maxChars, isRequired=false }) => {
  const value = useReserveState().additionalInfo;
  const dispatch = useReserveDispatch();

  const handleChange = (e) => dispatch({ type: "setTextField", field: "additionalInfo", value: e.target.value });
  return (
    <InputBase id={id} className="memo-inner" caption={caption} isRequired={isRequired} tabIndex={-1}>
      <textarea className="memo-input input-font" placeholder={placeholder} rows={numLines} maxlength={maxChars} value={value} onChange={handleChange} />
    </InputBase>
  );
}

export default MemoInput;