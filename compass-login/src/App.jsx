import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Unauthorized from "./pages/Unauthorized";

import PrivateRoute from "./Routes/PrivateRoute";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  let [isLogged, setIsLogged] = useState(true);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/error" exact element={<Unauthorized />} />
          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/Home" exact element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
