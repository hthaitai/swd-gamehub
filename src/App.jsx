import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Games from "./pages/Games"
import Assets from "./pages/Assets"
import Layout from "./pages/Layout"
import "./css/styles.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/assets" element={<Assets />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
