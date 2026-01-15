import { usePage } from "../global/pageContext"

const ReserveHeader = () => {
  const { page } = usePage();

  const getTitle = () => {
    let step = (page === "reserve1") ? "2" : "1";
    return `Reserve a table (Step ${step} of 2)`;
  }
  return (
    <div className="bg-color-green page-padding" style={{paddingBlock:"32px"}}>
      <h1>{getTitle()}</h1>
    </div>
  )
}

const Reserve = () => {
  const { setPageHome } = usePage();

  return (
    <>
      <ReserveHeader />
      <div style={{position:"static",height:"2000px"}} />
    </>
  )
}

export default Reserve;