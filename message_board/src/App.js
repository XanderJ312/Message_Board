import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"
import MyMessages from "./components/MyMessages"

function App() {
  const user = localStorage.getItem("token")
  
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/my_messages" exact element={<MyMessages />} />
    </Routes>
  );
}

export default App;

