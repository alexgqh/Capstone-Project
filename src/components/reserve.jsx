import "../styles/reserve.css"
import ReserveBanner from './reserveBanner'
import InputBase from "./inputBase"
import NumberInput from './numberInput'
import Button from './button'
import { usePage } from "../global/pageContext"
import { useState } from "react"

const Reserve = () => {

  const { page, cancelReservation, setPageReserve2 } = usePage();

  const Page1 = () => {
    const [focus, setFocus] = useState(null);

    return (
      <>
        <NumberInput id="input-nr-guests" caption="Number of guests" min={1} max={30} def={1} onFocus={() => setFocus(0)} isFocused={focus === 0} />
        <InputBase id="input-seating" caption="Seating" onFocus={() => setFocus(1)} isFocused={focus === 1} />
        <InputBase id="input-date" caption="Date" onFocus={() => setFocus(2)} isFocused={focus === 2} />
        <InputBase id="input-time" caption="Time" onFocus={() => setFocus(3)} isFocused={focus === 3} />
        <InputBase id="input-occasion" caption="Occasion" isRequired={false} onFocus={() => setFocus(4)} isFocused={focus === 4} />
      </>
    )
  }

  return (
    <>
      <ReserveBanner />
      <form id="reserve-form" className="page-padding">
        {
          page === "reserve1" ? (
            <Page1 />
            ) :
          null
        }
        <div id="reserve1-layout-empty-space" ariaHidden="true" />
        <Button id="reserve1-cancel" onClick={cancelReservation}>Cancel</Button>
        <Button id="reserve1-continue" isCTA={true} onClick={setPageReserve2}>Continue</Button>
      </form>
    </>
  )
}

export default Reserve;