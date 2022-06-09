import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Confirmed from "../Pages/Confirmed";
// import ForgotPassword from "../pages/ForgotPassword";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
import UserLogin from "../Pages/UserLogin";
import UserRegister from "../Pages/UserRegister";
import NewPassword from "../Pages/NewPassword";
import Footer from "../components/Footer";

function PublicRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact match path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/confirmed/:token" element={<Confirmed />} />
        <Route path="/forgot/:token" element={<NewPassword />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default PublicRouter;
