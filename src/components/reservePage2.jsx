import '../styles/reserve.css'
import '../styles/reservePage2.css'

import Button from "./button"
import { usePage } from "../global/pageContext"

const ReservePage2 = () => {
  const { setPageReserve1, setPageConfirmed } = usePage();

  return (
    <div className="five-col-layout">
      <Button className="form-button-reg" onClick={setPageReserve1}>Previous</Button>
      <Button className="form-button-cta" isCTA={true} onClick={setPageConfirmed}>Reserve Now!</Button>
    </div>
  )
}

export default ReservePage2;