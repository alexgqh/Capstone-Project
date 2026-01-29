import "../styles/reserve.css"
import ReserveProvider from "./context/reserveContext"
import ReserveBanner from './reserveBanner'
import NumberInput from './numberInput'
import RadioInput from './radioInput'
import CalendarInput from "./calendarInput"
import TimeInput from "./timeInput"
import ComboboxInput from "./comboboxInput"
import Button from './button'
import { usePage } from "../global/pageContext"

const Reserve = () => {

  const { page, cancelReservation, setPageReserve2 } = usePage();

  const Page1 = () => {
    return (
      <>
        <NumberInput id="input-nr-guests" caption="Number of guests" />
        <RadioInput id="input-seating" caption="Seating" options={["Indoor","Outdoor"]} />
        <CalendarInput id="input-date" caption="Date" placeholder="Select a date..." />
        <TimeInput id="input-time" placeholder="Select a time..." />
        <ComboboxInput id="input-occasion" caption="Occasion" isRequired={false} placeholder="What's the occasion? (Optional)" options={["Birthday","Engagement","Anniversary"]} />
      </>
    )
  }

  return (
    <ReserveProvider>
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
    </ReserveProvider>
  )
}

export default Reserve;