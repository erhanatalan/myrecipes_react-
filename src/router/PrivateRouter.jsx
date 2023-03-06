import { Navigate, Outlet } from "react-router-dom";


const PrivateRouter = () => {
    const isSigned = false
  return (
    <div>
        {isSigned ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter;