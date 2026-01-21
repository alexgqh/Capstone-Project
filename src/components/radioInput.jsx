import InputBase from "./inputBase"
import RadioButton from "./radioButton"
import { useState } from "react"

const RadioInput = ({ id, caption, onFocus, isFocused, isRequired, options }) => {
  const [selected, setSelected] = useState(0);

  return (
    <InputBase id={id} caption={caption} onFocus={onFocus} isFocused={isFocused} isRequired={isRequired}>
      <span className="radio-layout">
        {options.map((option, i) => {
          const onClick = () => {
            setSelected(i);
          }
          return <RadioButton toggledOn={i === selected} onClick={onClick}>{option}</RadioButton>
        })}
      </span>
    </InputBase>
  )
}

export default RadioInput;