import InputBase from "./inputBase"
import ChevronDownReg from '../assets/chevron-down-reg.svg'
import ChevronDownFaded from '../assets/chevron-down-faded.svg'
import ChevronUpReg from '../assets/chevron-up-reg.svg'
import ChevronUpFaded from '../assets/chevron-up-faded.svg'
import { useState, useEffect, useRef } from "react"

const NumberInput = ({ id, caption, min, max, def, onFocus, isFocused, isRequired = true }) => {
  const [value, setValue] = useState(def);
  const [decEnabled, setDecEnabled] = useState(def > min);
  const [incEnabled, setIncEnabled] = useState(def < max);

  const baseRef = useRef();

  useEffect(() => {
    setDecEnabled(value > min);
    setIncEnabled(value < max);
  }, [value]);

  const decVal = () => setValue(prev => prev > min ? prev - 1 : min);
  const incVal = () => setValue(prev => prev < max ? prev + 1 : max);
  const handleDecrement = (e) => {
    e.preventDefault();
    decVal();
    baseRef.current?.focus();
  }
  const handleIncrement = (e) => {
    e.preventDefault();
    incVal();
    baseRef.current?.focus();
  }
  const getDecrementorClassName = () => "number-input-decrementor" + (decEnabled ? "" : " disable-pointer");
  const getIncrementorClassName = () => "number-input-incrementor" + (incEnabled ? "" : " disable-pointer");

  const handleValueChange = (e) => {
    const val = e.target.value;
    if (val <= max && val >= min) {
      setValue(e.target.value);
    }
  }

  //Listen for arrow key presses
  useEffect(() => {
    const incKeys = ["ArrowUp", "ArrowRight"];
    const decKeys = ["ArrowDown", "ArrowLeft"];

    const handleKeyDown = (e) => {
      if (!isFocused) return;
      if (incKeys.includes(e.key)) incVal();
      if (decKeys.includes(e.key)) decVal();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  return (
    <InputBase id={id} caption={caption} isRequired={isRequired} style={{alignSelf:"center", minHeight:"77px"}} onFocus={onFocus} isFocused={isFocused} ref={baseRef}>
      <div className="number-input-layout">
        <button
          className={getDecrementorClassName()}
          onClick={handleDecrement}
          tabIndex={-1}
        >
          <img src={decEnabled ? ChevronDownReg : ChevronDownFaded} draggable={false} />
        </button>
        <input
          className="number-input"
          type="number"
          value={value} min={min} max={max}
          onChange={handleValueChange}
          onClick={() => baseRef.current?.focus()}
          tabIndex={-1}
        />
        <button
          className={getIncrementorClassName()}
          onClick={handleIncrement}
          tabIndex={-1}
        >
          <img src={incEnabled ? ChevronUpReg : ChevronUpFaded} draggable={false} />
        </button>
      </div>
    </InputBase>
  );
}


export default NumberInput;