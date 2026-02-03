import "../styles/reserveBanner.css"
import { usePage } from "./global/PageContext";

const ReserveBanner = () => {
  const { page, setPageReserve1, setPageReserve2, scrollToTop } = usePage();

  const getTitle = () => {
    const step = (page === "reserve2") ? "2" : "1";
    return `Reserve a table (Step ${step} of 2)`;
  }

  const handleProgressIndicatorClick = (buttonClicked) => {
    if (page === "reserve2") {
      //User is on page 2
      if (buttonClicked === 1) {
        setPageReserve1();
      } else {
        scrollToTop();
      }
    } else {
      //User is on page 1
      if (buttonClicked === 1) {
        scrollToTop();
      } else {
        //check that all info is filled out
        setPageReserve2();
      }
    }
  }

  return (
    <div className="bg-color-green page-padding padding-block-md">
      <h1>{getTitle()}</h1>
      <div className="progress-indicator" style={{display:"flex", alignItems:"center"}}>
        <button className="circle circle-closed" onClick={() => handleProgressIndicatorClick(1)} tabIndex={-1} />
        <div className="bar" />
        <button className={"circle " + ((page==="reserve1") ? "circle-open" : "circle-closed")} onClick={() => handleProgressIndicatorClick(2)} tabIndex={-1} />
      </div>
    </div>
  )
}

export default ReserveBanner;