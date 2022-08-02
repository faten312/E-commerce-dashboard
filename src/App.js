import React, { useContext, Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Single from "./pages/Single/Single";
import List from "./pages/List/List";
import New from "./pages/New/New";
import { DarkModeContext } from "./Context/darkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="/products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
