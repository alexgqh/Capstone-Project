import "../styles/reserve.css"
import ReserveProvider from "./context/reserveContext"
import ReserveBanner from './reserveBanner'
import ReservePage1 from "./reservePage1"
import ReservePage2 from "./reservePage2"
import ReserveConfirmation from "./reserveConfirmation"
import { usePage } from "../global/pageContext"

const Reserve = () => {

  const { page } = usePage();

  const renderPage = () => {
    if (page === "reserve1") return <ReservePage1 />
    if (page === "reserve2") return <ReservePage2 />
    if (page === "reservationConfirmed") return <ReserveConfirmation />
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