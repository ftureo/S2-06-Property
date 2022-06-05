import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Confirmed from "../pages/Confirmed";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import NewPassword from "../pages/NewPassword";



function PublicRouter() {
    return (
        <>
            <Navbar/>
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route exact match path="/login" element= {<UserLogin />}/>
                    <Route path="/register" element= {<UserRegister/>}/>
                    <Route path="/forgot" element= {<ForgotPassword />}/>
                    <Route path="/confirmed/:token" element= {<Confirmed />}/>
                    <Route path="/forgot/:token" element={<NewPassword />}></Route>
            </Routes>
        </> 
     );
}

export default PublicRouter;