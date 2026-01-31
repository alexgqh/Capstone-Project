import '../styles/reserve.css'
import '../styles/reservePage2.css'

import Button from "./button"
import TextInput from './textInput'
import { usePage } from "./global/PageContext"

const ReservePage2 = () => {
  const { setPageReserve1, setPageConfirmed } = usePage();

  return (
    <>
      <div className = "two-col-layout">
        <TextInput id="input-name-first" caption="First name" placeholder="Your first name" field="firstName" />
        <TextInput id="input-name-last" caption="Last name" placeholder="Your last name" field="lastName" />
        <TextInput id="input-email" caption="Email" placeholder="Your email" field="email" />
        <TextInput id="input-tel" caption="Phone number" placeholder="Your phone number" field="phoneNumber" />
      </div>
      <div className="five-col-layout">
        <Button className="form-button-reg" onClick={setPageReserve1}>Previous</Button>
        <Button className="form-button-cta" isCTA={true} onClick={setPageConfirmed}>Reserve Now!</Button>
      </div>
    </>
  )
}

export default ReservePage2;