import { BrowserRouter, Routes, Route } from "react-router-dom"
import styles from './style';
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}
