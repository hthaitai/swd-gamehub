import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Games from "./pages/Games"
import Assets from "./pages/Assets"
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./css/styles.css"
import Profile from "./pages/Profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
