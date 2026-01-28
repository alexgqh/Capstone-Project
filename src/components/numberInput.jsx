import InputBase from "./inputBase"
import ChevronDownReg from '../assets/chevron-down-reg.svg'
import ChevronDownFaded from '../assets/chevron-down-faded.svg'
import ChevronUpReg from '../assets/chevron-up-reg.svg'
import ChevronUpFaded from '../assets/chevron-up-faded.svg'
import { useState, useEffect, useRef } from "react"

const NumberInput = ({ id, caption, min, max, def, isRequired = true }) => {
  const [value, setValue] = useState(def);
  const [decEnabled, setDecEnabled] = useState(def > min);
  const [incEnabled, setIncEnabled] = useState(def < max);

  const inputRef = useRef();
  const inputTimeoutIDRef = useRef();

  useEffect(() => {
    setDecEnabled(value > min);
    setIncEnabled(value < max);
  }, [value]);

  const decVal = () => setValue(prev => prev > min ? parseInt(prev) - 1 : min);
  const incVal = () => setValue(prev => prev < max ? parseInt(prev) + 1 : max);

  const selectInputText = () => {
    setTimeout(() => inputRef.current?.select(), 1);
  }
  const handleDecrement = (e) => {
    e.preventDefault();
    decVal();
    selectInputText();
  }
  const handleIncrement = (e) => {
    e.preventDefault();
    incVal();
    selectInputText();
  }
  const handleValueChange = (e) => {
    const val = e.target.value;
    if (val <= max && val >= min) {
      setValue(e.target.value);
    }
    else if (val > max) {
      setValue(max);
    }
    else if (val < min) {
      setValue(min);
    }
  }
  const handleFocus = () => {
    inputRef.current?.select();
  }
  const handleKeyUp = () => {
    const timeout = 750;

    if (inputTimeoutIDRef.current) {
      clearTimeout(inputTimeoutIDRef.current);
      inputTimeoutIDRef.current = null;
    }

    const timeoutFunction = () => {
      function isInputFocused() {
        if (!inputRef.current) return false;
        return document.activeElement === inputRef.current;
      }
      if (isInputFocused()) inputRef.current?.select();
      inputTimeoutIDRef.current = null;
    }

    inputTimeoutIDRef.current = setTimeout(timeoutFunction, timeout);
  }

  return (
    <InputBase id={id} caption={caption} isRequired={isRequired} parentStyle={{alignSelf:"center", minHeight:"77px"}} onFocus={handleFocus} role="spinbutton">
      <div className="number-input-layout">
        <button
          className={`${decEnabled ? "" : " disable-pointer"}`}
          onClick={handleDecrement}
          tabIndex={-1}
        >
          <img src={decEnabled ? ChevronDownReg : ChevronDownFaded} draggable={false} />
        </button>
        <div className="number-input-container">
          <input
            className="number-input input-font"
            type="number"
            value={value} min={min} max={max}
            onChange={handleValueChange}
            onClick={selectInputText}
            onKeyUp={handleKeyUp}
            style={{width: `calc(${String(value).length}ch + 16px)`}}
            ref={inputRef}
          />
        </div>
        <button
          className={`${incEnabled ? "" : " disable-pointer"}`}
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