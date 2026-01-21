import "../styles/reserve.css"
import ReserveBanner from './reserveBanner'
import InputBase from "./inputBase"
import NumberInput from './numberInput'
import RadioInput from './radioInput'
import Button from './button'
import { usePage } from "../global/pageContext"

const Reserve = () => {

  const { page, cancelReservation, setPageReserve2 } = usePage();

  const Page1 = () => {
    return (
      <>
        <NumberInput id="input-nr-guests" caption="Number of guests" min={1} max={30} def={1} />
        <RadioInput id="input-seating" caption="Seating" options={["Indoor","Outdoor"]} />
        <InputBase id="input-date" caption="Date" />
        <InputBase id="input-time" caption="Time" />
        <InputBase id="input-occasion" caption="Occasion" isRequired={false} />
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

//next thing I want to do is to restore form focus to normal state... We don't need to keep track of focus manually.