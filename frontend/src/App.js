import "./App.css";

import {BrowserRouter, Route, Routes } from "react-router-dom"
import PublicRouter from "./routes/PublicRouter";

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes>
            <Route path="*" element= {<PublicRouter/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
