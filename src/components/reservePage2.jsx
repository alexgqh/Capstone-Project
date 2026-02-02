import '../styles/reserve.css'
import '../styles/reservePage2.css'

import Button from "./button"
import TextInput from './textInput'
import MemoInput from './memoInput'
import ErrorMessage from './errorMessage'
import { usePage } from "./global/PageContext"
import { useState, useRef, useEffect } from 'react'
import { textFieldLengths, validateInput } from './reducer/reserveReducer'
import { useReserveState } from './context/reserveContext'

const ReservePage2 = () => {
  const { setPageReserve1, setPageConfirmed } = usePage();
  const [ invalidFields, setInvalidFields ] = useState(null);
  const [ missingFields, setMissingFields ] = useState(null);
  const firstInputRef = useRef();
  const state = useReserveState();

  useEffect(() => {
    firstInputRef.current?.focus();
  }, [])

  const handleConfirmClick = () => {
    const result = validateInput(state);
    if (result.success) {
      setPageConfirmed();
    } else {
      if (result.invalidValue.length > 0) {
        setInvalidFields("Invalid format: "+result.invalidValue.join(", "));
      } else {
        setInvalidFields(null);
      }
      if (result.missingValue.length === 1) {
        setMissingFields("Field missing: "+result.missingValue[0]);
      } else if (result.missingValue.length > 1) {
        setMissingFields("Fields missing: "+result.missingValue.join(", "));
      } else {
        setMissingFields(null);
      }
    }
  }

  return (
    <>
      {invalidFields && <ErrorMessage message={invalidFields} />}
      {missingFields && <ErrorMessage message={missingFields} />}
      <div className = "two-col-layout">
        <TextInput id="input-name-first" caption="First name" placeholder="Your first name" field="firstName" ref={firstInputRef} />
        <TextInput id="input-name-last" caption="Last name" placeholder="Your last name" field="lastName" />
        <TextInput id="input-email" caption="Email" placeholder="Your email" field="email" type="email" />
        <TextInput id="input-tel" caption="Phone number" placeholder="Your phone number" field="phoneNumber" type="tel" />
        <MemoInput id="input-additional-info" caption="Additional info" placeholder="Enter any additional information or special requests here (Optional)" numLines={4} maxChars={textFieldLengths.additionalInfo} />
      </div>
      <div className="five-col-layout padding-bottom-md">
        <Button className="form-button-reg" onClick={setPageReserve1}>Previous</Button>
        <Button className="form-button-cta" isCTA={true} onClick={handleConfirmClick}>Reserve Now!</Button>
      </div>
    </>
  )
}

export default ReservePage2;