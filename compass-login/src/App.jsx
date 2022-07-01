import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route element={<PrivateRoute isLogged={true}/>}>
         <Route path="/Home" exact element={<Home />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
