import '../styles/input.css'
import InputBase from "./inputBase"
import { useReserveState, useReserveDispatch } from "./context/reserveContext"
import { textFieldLengths } from "./reducer/reserveReducer"

const TextInput = ({ id, caption, isRequired=true, type="text", placeholder, ref, field }) => {
  const value = useReserveState()[field];
  const dispatch = useReserveDispatch();

  function renderInput() {
    const handleChange = (e) => dispatch({ type: "setTextField", field, value: e.target.value })
    const raw = textFieldLengths[field]
    const maxLength = Number.isInteger(raw) && raw >= 0 ? raw : 0
    return <input
      type={type}
      className="input-font"
      onChange={handleChange}
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
      required={isRequired}
      // autoFocus={true}
      ref={ref}
    />
  }

  return (
    <InputBase id={id} className="input-text" isRequired={isRequired} caption={caption} role="text" tabIndex={-1}>
      {renderInput()}
    </InputBase>
  );
}

export default TextInput