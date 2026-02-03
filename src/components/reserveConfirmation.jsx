import { useReserveState } from "./context/reserveContext";
import { OCCASIONOPTIONS } from "./reducer/reserveReducer";
import { usePage } from "./global/PageContext";
import Button from "./button";

const ReserveConfirmation = () => {
  const state = useReserveState();
  const { setPageHome } = usePage();

  return (
    <div className="fullscreen bg-green">
      <div className="vertical-layout">
        <div>
          <h1>Reservation confirmed!</h1>
          <h2>Thank you for choosing Little Lemon.</h2>
        </div>
        <div className="reservation-details">
          <h4>Reservation Details</h4>
          <div style={{textAlign:"left"}}>
            <p>Table for: <b>{state.guests}</b></p>
            <p>When: <b>{state.date.toLocaleString("default", { weekday: "long", month: "long", day: "numeric" })}</b> at <b>{state.time} PM CST</b></p>
            <p>Seating: <b>{state.seating === 0 ? "Indoor" : "Outdoor"}</b></p>
            {(state.occasion !== null) && <p>Occasion: <b>{OCCASIONOPTIONS[state.occasion]}</b></p>}
            <p>Your name: <b>{state.firstName} {state.lastName}</b></p>
            <p>Your email: <b>{state.email}</b></p>
            <p>Your phone number: <b>{state.phoneNumber}</b></p>
            {state.additionalInfo && <p>Additional info: <b>{state.additionalInfo}</b></p>}
          </div>
        </div>
        <Button isCTA={true} style={{marginTop: "1rem", width: "100%"}} onClick={setPageHome}>Return to home</Button>
      </div>
    </div>
  )
}

export default ReserveConfirmation