import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import NotFound from "./components/NotFound"
import { NavBar } from "./components/Home/Navbar"
import { SideBar } from "./components/Home/Sidebar"
import './App.scss'

function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />
      <div className="content-window">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/apps/*"} element={<Home />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App