import { usePage } from "../global/pageContext"
import Button from "./button";

const Reserve = () => {
  const { setPageHome } = usePage();

  return (
    <>
      <Button isCTA={true} onClick={setPageHome}>Back to home</Button>
      <div style={{position:"static",height:"2000px"}} />
    </>
  )
}

export default Reserve;