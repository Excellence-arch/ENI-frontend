import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/admin_login" element={<Login />} />
        <Route path="/eni_admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App;