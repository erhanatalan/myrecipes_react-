import errorImg from "./404.png"
const NotFound = () => {
  return (
    <>
      <img className="w-75" src={errorImg} alt="notfound" />
    </>
  )
}

export default NotFound;