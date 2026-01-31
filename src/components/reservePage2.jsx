import '../styles/reserve.css'
import '../styles/reservePage2.css'

import Button from "./button"
import TextInput from './textInput'
import { usePage } from "./global/PageContext"
import { useRef, useEffect } from 'react'
import { validateInput } from './reducer/reserveReducer'
import { useReserveState } from './context/reserveContext'

const ReservePage2 = () => {
  const { setPageReserve1, setPageConfirmed } = usePage();
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
      alert('error!')
    }
  }

  return (
    <>
      <div className = "two-col-layout">
        <TextInput id="input-name-first" caption="First name" placeholder="Your first name" field="firstName" ref={firstInputRef} />
        <TextInput id="input-name-last" caption="Last name" placeholder="Your last name" field="lastName" />
        <TextInput id="input-email" caption="Email" placeholder="Your email" field="email" type="email" />
        <TextInput id="input-tel" caption="Phone number" placeholder="Your phone number" field="phoneNumber" type="tel" />
      </div>
      <div className="five-col-layout">
        <Button className="form-button-reg" onClick={setPageReserve1}>Previous</Button>
        <Button className="form-button-cta" isCTA={true} onClick={handleConfirmClick}>Reserve Now!</Button>
      </div>
    </>
  )
}

export default ReservePage2;