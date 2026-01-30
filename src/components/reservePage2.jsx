import Button from "./button"
import { usePage } from "../global/pageContext";

const ReservePage2 = () => {
  const { setPageReserve1, setPageConfirmed } = usePage();

  return (
    <>
      <Button id="reserve-cancel" onClick={setPageReserve1}>Previous</Button>
      <Button id="reserve-continue" isCTA={true} onClick={setPageConfirmed}>Reserve Now!</Button>
    </>
  )
}

export default ReservePage2;