
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FirstForm, Signup } from './components/LoginComp'
import AdminHome from './components/AdminHome'
import TemHome from './components/TemHome'
import TmHome from './components/TmHome'
import MuHome from './components/MuHome'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              ScoreZone
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<FirstForm/>} />
              <Route path="/sign-in" element={<FirstForm/>} />
              <Route path="/sign-up" element={<Signup/>} />
              <Route path="admin_home" element={<AdminHome/>} />
              <Route path="tm_home" element={<TmHome/>} />
              <Route path="tem_home" element={<TemHome/>} />
              <Route path="mu_home" element={<MuHome/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App