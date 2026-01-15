import "../styles/reserve.css"
import ReserveBanner from './reserveBanner'
import InputBase from "./inputBase"
import Button from './button'
import { usePage } from "../global/pageContext"

const Reserve = () => {

  const { page } = usePage();

  const Page1 = () => {
    return (
      <div id="reserve1-layout">
        <InputBase caption="Number of guests" placeholder={"Test Placeholder"} id="input-nr-guests">
          <p className="color-charcoal">test</p>
        </InputBase>
        <InputBase caption="Seating" id="input-seating">
          <p className="color-charcoal">test</p>
        </InputBase>
        <InputBase caption="Date" id="input-date">
          <p className="color-charcoal">test</p>
        </InputBase>
        <InputBase caption="Time" id="input-time">
          <p className="color-charcoal">test</p>
        </InputBase>
        <InputBase caption="Occasion" isRequired={false} id="input-occasion">
          <p className="color-charcoal">test</p>
        </InputBase>
        <div id="reserve1-layout-empty-space" ariaHidden="true" />
        <Button id="reserve1-cancel">Cancel</Button>
        <Button id="reserve1-continue" isCTA={true}>Continue</Button>
      </div>
    )
  }

  return (
    <>
      <ReserveBanner />
      <form id="reserve-1-form">
        {
          page === "reserve1" ? (
            <Page1 />
            ) :
          null
        }
      </form>
    </>
  )
  // <InputBase caption="Number of guests" isRequired={true} placeholder={"Test Placeholder"}>
  //   <p className="color-charcoal">test</p>
  // </InputBase>
  // <div style={{position:"static",height:"2000px"}} />
}

export default Reserve;