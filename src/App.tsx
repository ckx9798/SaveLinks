import "./App.css";
import "./styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
