import LoadingIcon from "./loadingIcon";

const ReserveConfirming = () => {
  return (
    <div className="fullscreen bg-white">
      <div className="vertical-layout">
        <LoadingIcon />
        <h4 className="color-green">Confirming<br />reservation...</h4>
      </div>
    </div>
  )
}

export default ReserveConfirming;