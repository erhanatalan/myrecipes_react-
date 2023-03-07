import { Navigate, Outlet } from "react-router-dom";
// import NotFound from "../pages/notFound/NotFound";
import Data from "./Data";

const PrivateRouter = () => {
  return <>{Data[0].isSigned ? <Outlet/> : <Navigate to="/login"/>}</>
}

export default PrivateRouter;