import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Confirmed from "../pages/Confirmed";
import ForgotEmail from "../pages/ForgotEmail";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";



function PublicRouter() {
    return (
        <>
            <Navbar/>
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route exact match path="/login" element= {<UserLogin />}/>
                    <Route path="/register" element= {<UserRegister/>}/>
                    <Route path="/forgot" element= {<ForgotEmail />}/>
                    <Route path="/confirmed/:token" element= {<Confirmed />}/>
            </Routes>
        </> 
     );
}

export default PublicRouter;