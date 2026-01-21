import InputBase from "./inputBase"
import RadioButton from "./radioButton"
import { useState } from "react"

const RadioInput = ({ id, caption, isRequired, options }) => {
  const [selected, setSelected] = useState(0);

  const handleKeyDown = (e) => {
    const min = 0;
    const max = options.length - 1;
    const incKeys = ["ArrowRight", "ArrowUp"];
    const decKeys = ["ArrowLeft", "ArrowDown"];
    const cycleKeys = [" "];

    if (incKeys.includes(e.key)) {
      setSelected(prev => Math.min(prev + 1, max));
    }
    else if (decKeys.includes(e.key)) {
      setSelected(prev => Math.max(prev - 1, min));
    }
    else if (cycleKeys.includes(e.key)) {
      setSelected(prev => prev < max ? prev + 1 : min);
    }
  }

  return (
    <InputBase id={id} caption={caption} isRequired={isRequired} onKeyDown={handleKeyDown}>
      <span className="radio-layout" role="radiogroup" tabIndex={-1}>
        {options.map((option, i) => {
          return <RadioButton toggledOn={i === selected} onClick={() => setSelected(i)}>{option}</RadioButton>
        })}
      </span>
    </InputBase>
  )
}

export default RadioInput;