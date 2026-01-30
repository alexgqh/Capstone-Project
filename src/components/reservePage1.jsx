import { MAXGUESTS, MINGUESTS, SEATINGOPTIONS, MINDATE, MAXDATE, OCCASIONOPTIONS } from "./reducer/reserveReducer"
import { usePage } from "../global/pageContext"
import NumberInput from './numberInput'
import RadioInput from './radioInput'
import CalendarInput from "./calendarInput"
import TimeInput from "./timeInput"
import ComboboxInput from "./comboboxInput"
import Button from './button'

const ReservePage1 = () => {
  const { cancelReservation, setPageReserve2 } = usePage();

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

export default ReservePage1;