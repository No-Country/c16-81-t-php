import { BrowserRouter, Routes, Route } from "react-router-dom"
import styles from './style';
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar.jsx"

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
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}
