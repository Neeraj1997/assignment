import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/View/Home";
import AuthCheck from "./components/utils/authCheck";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/View/navbar/Navbar";
import UserAccount from "./components/Auth/UserAccount";
function App() {
  return (
    // there were a lot more changes which I wanted to do but could'nt due to time constrains if more time alloted I can.
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
           <Route
          path="/useraccount"
          element={
            <AuthCheck>
              <UserAccount />
            </AuthCheck>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
