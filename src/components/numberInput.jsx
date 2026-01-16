import InputBase from "./inputBase"
import ChevronDownReg from '../assets/chevron-down-reg.svg'
import ChevronDownFaded from '../assets/chevron-down-faded.svg'
import ChevronUpReg from '../assets/chevron-up-reg.svg'
import ChevronUpFaded from '../assets/chevron-up-faded.svg'
import { useState, useEffect } from "react"

const NumberInput = ({ caption, min, max, def, id, style, isRequired = true }) => {
  const [value, setValue] = useState(def);
  const [decEnabled, setDecEnabled] = useState(def > min);
  const [incEnabled, setIncEnabled] = useState(def < max);

  useEffect(() => {
    setDecEnabled(value > min);
    setIncEnabled(value < max);
  }, [value])

  const handleDecrement = (e) => {
    e.preventDefault();
    setValue(prev => decEnabled ? prev - 1 : prev);
  }
  const handleIncrement = (e) => {
    e.preventDefault();
    setValue(prev => incEnabled ? prev + 1 : prev);
  }

  const getDecrementorClassName = () => "number-input-decrementor" + (decEnabled ? "" : " disable-pointer");
  const getIncrementorClassName = () => "number-input-incrementor" + (incEnabled ? "" : " disable-pointer");

  return (
    <InputBase id={id} caption={caption} isRequired={isRequired} style={{...style, minHeight:"77px"}}>
      <div className="number-input-layout">
        <button className={getDecrementorClassName()} onClick={handleDecrement}>
          <img src={decEnabled ? ChevronDownReg : ChevronDownFaded} />
        </button>
        <input className="number-input" type="number" value={value} min={min} max={max} />
        <button className={getIncrementorClassName()} onClick={handleIncrement}>
          <img src={incEnabled ? ChevronUpReg : ChevronUpFaded} />
        </button>
      </div>
    </InputBase>
  );
}

export default NumberInput;