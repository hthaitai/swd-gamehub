import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Games from "./pages/Games"
import Assets from "./pages/Assets"
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./css/styles.css"
import GameDetail from "./pages/GameDetail"
import games from "./data/gameData"
import Profile from "./pages/Profile"
import AssetDetail from "./pages/AssetDetail"
import ProtectedRoute from "./components/ProtectedRoute"
import Checkout from "./pages/Checkout"
import AuthRoute from "./components/AuthRoute"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./pages/DashboardLayout"
import UploadGame from "./pages/UploadGame"
import UpdateGame from "./pages/UpdateGame"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route index element={<HomePage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute allowedRoles={["USER", "ADMIN"]}>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets"
            element={
              <ProtectedRoute allowedRoles={["DEVELOPER", "DESIGNER", "ADMIN"]}>
                <Assets />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assets/:id"
            element={
              <ProtectedRoute allowedRoles={["DEVELOPER", "DESIGNER"]}>
                <AssetDetail />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="upload-game" element={<UploadGame />} />
          <Route path="update-game" element={<UpdateGame />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
