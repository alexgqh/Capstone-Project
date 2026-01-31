import '../styles/input.css'
import InputBase from "./inputBase"
import Placeholder from "./placeholder"
import { useReserveState, useReserveDispatch } from "./context/reserveContext"
import { textFieldLengths } from "./reducer/reserveReducer"

const TextInput = ({ id, caption, required=true, placeholder, field }) => {
  const value = useReserveState()[field];
  const dispatch = useReserveDispatch();

  function renderValueOrPlaceholder() {
    if (value !== null) {
      const handleChange = (e) => dispatch({ type: "setTextField", field, value: e.target.value })
      const raw = textFieldLengths[field]
      const maxLength = Number.isInteger(raw) && raw >= 0 ? raw : 0
      return <input type="text" className="input-font" onChange={handleChange} maxLength={maxLength} value={value} autoFocus={true} />
    } else {
      const handleClick = () => dispatch({ type: "setTextField", field, value: "" })
      return (
        <div className="cursor-text" onClick={handleClick}>
          <Placeholder>{placeholder}</Placeholder>
        </div>
      )
    }
  }

  return (
    <InputBase id={id} className="input-text" required={required} caption={caption} role={"text"}>
      {renderValueOrPlaceholder()}
    </InputBase>
  );
}

export default TextInput