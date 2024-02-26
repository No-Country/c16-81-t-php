import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import LayoutProfile from "./pages/Dashboard/Profile/LayoutProfile.jsx";
import WatchProfile from "./pages/Dashboard/Profile/WatchProfile.jsx";
import EditProfile from "./pages/Dashboard/Profile/EditProfile.jsx";
import SuspendProfile from "./pages/Dashboard/Profile/SuspendProfile.jsx";
import ChangePassword from "./pages/Dashboard/Profile/ChangePassword.jsx";

import LayoutTournament from "./pages/Dashboard/Tournament/LayoutTournament.jsx";
import CreateTournament from "./pages/Dashboard/Tournament/CreateTournament.jsx";
import MyTournaments from "./pages/Dashboard/Tournament/MyTournaments.jsx";
import Participating from "./pages/Dashboard/Tournament/Participating.jsx";

import LayoutTeam from "./pages/Dashboard/Team/LayoutTeam.jsx";
import CreateTeam from "./pages/Dashboard/Team/CreateTeam.jsx";
import MyTeams from "./pages/Dashboard/Team/MyTeams.jsx";
import Integrating from "./pages/Dashboard/Team/Integrating.jsx";
import Games from "./pages/Games/Games";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Ranking from "./pages/Ranking/Ranking";

export default function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <BrowserRouter>
          <div className={`${styles.paddingX} ${styles.flexCenter} relative z-50`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/games" element={<Games />} />
            <Route path="/leaderboard" element={<Ranking />} />
            
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route path="/dashboard/mi-perfil" element={<LayoutProfile />}>
                <Route path="editar-perfil" element={<EditProfile />} />
                <Route path="suspender-perfil" element={<SuspendProfile />} />
                <Route path="cambiar-contraseña" element={<ChangePassword />} />
                <Route index element={<WatchProfile />} />
              </Route>

              <Route path="/dashboard/torneos" element={<LayoutTournament />}>
                <Route path="crear-torneo" index element={<CreateTournament />} />
                <Route path="mis-torneos" element={<MyTournaments />} />
                <Route path="participando" element={<Participating />} />
              </Route>

              <Route path="/dashboard/equipos" element={<LayoutTeam />}>
                <Route path="crear-equipo" index element={<CreateTeam />} />
                <Route path="mis-equipos" element={<MyTeams />} />
                <Route path="integrando" element={<Integrating />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
