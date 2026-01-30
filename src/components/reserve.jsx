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
import { MAXGUESTS, MINGUESTS, SEATINGOPTIONS, MINDATE, MAXDATE, OCCASIONOPTIONS } from "./reducer/reserveReducer"

const Reserve = () => {

  const { page, cancelReservation, setPageReserve1, setPageReserve2, setPageConfirmed } = usePage();

  const Page1 = () => {
    return (
      <>
        <NumberInput id="input-nr-guests" caption="Number of guests" min={MINGUESTS} max={MAXGUESTS} />
        <RadioInput id="input-seating" caption="Seating" options={SEATINGOPTIONS} />
        <CalendarInput id="input-date" caption="Date" placeholder="Select a date..." minDate={MINDATE} maxDate={MAXDATE} />
        <TimeInput id="input-time" placeholder="Select a time..." />
        <ComboboxInput id="input-occasion" caption="Occasion" isRequired={false} placeholder="What's the occasion? (Optional)" options={OCCASIONOPTIONS} />
        <div id="reserve-layout-empty-space" ariaHidden="true" />
        <Button id="reserve-cancel" onClick={cancelReservation}>Cancel</Button>
        <Button id="reserve-continue" isCTA={true} onClick={setPageReserve2}>Continue</Button>
      </>
    )
  }

  const Page2 = () => {
    return (
      <>
        {/* <NumberInput id="input-nr-guests" caption="Number of guests" min={MINGUESTS} max={MAXGUESTS} />
        <RadioInput id="input-seating" caption="Seating" options={SEATINGOPTIONS} />
        <CalendarInput id="input-date" caption="Date" placeholder="Select a date..." minDate={MINDATE} maxDate={MAXDATE} />
        <TimeInput id="input-time" placeholder="Select a time..." />
        <ComboboxInput id="input-occasion" caption="Occasion" isRequired={false} placeholder="What's the occasion? (Optional)" options={OCCASIONOPTIONS} /> */}
        <div id="reserve-layout-empty-space" ariaHidden="true" />
        <Button id="reserve-cancel" onClick={setPageReserve1}>Previous</Button>
        <Button id="reserve-continue" isCTA={true} onClick={setPageConfirmed}>Reserve Now!</Button>
      </>
    )
  }

  const PageConfirmation = () => {
    return <div>Yay! Confirmed!</div>
  }

  const renderPage = () => {
    if (page === "reserve1") return <Page1 />
    if (page === "reserve2") return <Page2 />
    if (page === "confirmed") return <PageConfirmation />
  }

  return (
    <ReserveProvider>
      {page.startsWith("reserve") && <ReserveBanner />}
      <form id="reserve-form" className="page-padding">
        {renderPage()}
      </form>
    </ReserveProvider>
  )
}

export default Reserve;