import { useState } from "react";
import React from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Unauthorized from "./pages/Unauthorized";

import PrivateRoute from "./Routes/PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AuthContext = React.createContext();

function App() {
  let [isLogged, setIsLogged] = useState(false);

  function permission() {
    setIsLogged((isLogged = true));
  }

  return (
    <AuthContext.Provider value={permission}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Unauthorized" exact element={<Unauthorized />} />

          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/Home" exact element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
