import InputBase from "./inputBase"
import RadioButton from "./radioButton"
import { useReserveState, useReserveDispatch } from "./context/reserveContext"

const RadioInput = ({ id, caption, isRequired, options }) => {
  const selected = useReserveState().seating;
  const dispatch = useReserveDispatch();

  const handleKeyDown = (e) => {
    const incKeys = ["ArrowRight", "ArrowUp"];
    const decKeys = ["ArrowLeft", "ArrowDown"];
    const cycleKeys = [" "];

    if (incKeys.includes(e.key)) {
      dispatch({ type: "setSeating", value: selected + 1 })
    }
    else if (decKeys.includes(e.key)) {
      dispatch({ type: "setSeating", value: selected - 1 })
    }
    else if (cycleKeys.includes(e.key)) {
      dispatch({ type: "cycleSeating" })
    }
  }

  return (
    <InputBase id={id} caption={caption} isRequired={isRequired} onKeyDown={handleKeyDown}>
      <span className="radio-layout" role="radiogroup" tabIndex={-1}>
        {options.map((option, i) => {
          const handleClick = () => dispatch({ type: "setSeating", value: i })
          return <RadioButton toggledOn={i === selected} onClick={handleClick} key={"seatingOption"+i}>{option}</RadioButton>
        })}
      </span>
    </InputBase>
  )
}

export default RadioInput;