import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import PrivateRouter from "./router/PrivateRouter";
import Data from "./router/Data"

function App() {
  const isSign = Data[0].isSigned;
  return (
    <>
        <Routes path="/" element={<PrivateRouter/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
