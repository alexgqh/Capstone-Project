import ReserveProvider from "./context/reserveContext"
import ReserveBanner from './reserveBanner'
import ReservePage1 from "./reservePage1"
import ReservePage2 from "./reservePage2"
import ReserveConfirming from './reserveConfirming';
import ReserveConfirmation from "./reserveConfirmation"
import { usePage } from "./global/PageContext"

const Reserve = () => {

  const { page } = usePage();

  const isConfirming = (page === "reservationConfirming");
  const isConfirmed = (page === "reservationConfirmed");

  function renderReserveForm() {
    return (
      <form className="page-padding padding-top-md">
        {page === "reserve1" && <ReservePage1 />}
        {page === "reserve2" && <ReservePage2 />}
      </form>
    )
  }

  return (
    <ReserveProvider>
      {!isConfirmed && !isConfirming && <ReserveBanner />}
      {!isConfirmed && !isConfirming && renderReserveForm()}
      {isConfirming && <ReserveConfirming />}
      {isConfirmed && <ReserveConfirmation />}
    </ReserveProvider>
  )
}

export default Reserve;