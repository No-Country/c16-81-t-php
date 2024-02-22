import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import EditProfile from "./pages/Dashboard/Profile/EditProfile.jsx";
import SuspendProfile from "./pages/Dashboard/Profile/SuspendProfile.jsx";
import ChangePassword from "./pages/Dashboard/Profile/ChangePassword.jsx";
import WatchProfile from "./pages/Dashboard/Profile/WatchProfile.jsx";
import LayoutProfile from "./pages/Dashboard/Profile/LayoutProfile.jsx";

export default function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <BrowserRouter>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/mi-perfil" element={<LayoutProfile />}>
                <Route path="editar-perfil" element={<EditProfile />} />
                <Route path="suspender-perfil" element={<SuspendProfile />} />
                <Route path="cambiar-contraseña" element={<ChangePassword />} />
                <Route index element={<WatchProfile />} />
              </Route>              
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
