import InputBase from "./inputBase"

const RadioInput = ({ id, caption, onFocus, isFocused, isRequired }) => {
  return (
    <InputBase id={id} caption={caption} onFocus={onFocus} isFocused={isFocused} isRequired={isRequired}>
      <div className="input-font">
        Radio Input!
      </div>
    </InputBase>
  )
}

export default RadioInput;