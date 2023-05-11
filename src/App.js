import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Signup/Login";
import Signup from "./Signup/Signup";
import User from "./User/MainPage/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
