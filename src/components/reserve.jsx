import { usePage } from "../global/pageContext"
import Button from "./button";

const Reserve = () => {
  const { setPageHome } = usePage();
  return <Button isCTA={true} onClick={setPageHome}>Back to home</Button>
}

export default Reserve;