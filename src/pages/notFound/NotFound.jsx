import errorImg from "./404.png"
const NotFound = () => {
  return (
    <div>
        <img className="w-75" src={errorImg} alt="notfound" />
    </div>
  )
}

export default NotFound