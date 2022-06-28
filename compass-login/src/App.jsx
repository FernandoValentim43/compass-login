import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Home" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
