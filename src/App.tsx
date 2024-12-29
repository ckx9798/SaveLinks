import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="Home" />
        <Route path="/login" element="Login" />
        <Route path="/login" element="SignUp" />
        <Route path="/links" element="Links" />
        <Route path="/todos" element="Todos" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
