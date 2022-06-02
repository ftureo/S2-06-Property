import "./App.css";
import UserRegister from "./Pages/UserRegister";
import UserLogin from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <UserLogin />
      <Navbar />
      <UserRegister />
    </>
  );
}

export default App;
