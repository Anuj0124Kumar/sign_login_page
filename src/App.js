import "./App.css";
import Signlogin from "./component/Signlogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signlogin />}/>
      </Routes>
      <Routes>
        <Route path="/sign_up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
