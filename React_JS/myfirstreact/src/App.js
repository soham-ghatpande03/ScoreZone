
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FirstForm, NewForm ,NewLogin,Signup } from './components/LoginComp'
import AdminHome from './components/AdminHome'
import TemHome from './components/TemHome'
import TmHome from './components/TmHome'
import MuHome from './components/MuHome'
import { useSelector } from 'react-redux'
import FrontHome from './components/FrontHome'
import LogoutComp from './components/LogoutComp'

function App() {

  //initialState of loggedSlice
  const mystate = useSelector((state)=>state.logged);

  return (
    <Router>
      <div className="App">
        <div style={{display: mystate.loggedin ? "none" : "block"}}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
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
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<FrontHome/>} />
              <Route path="/" element={<FrontHome/>} />
              <Route path="/sign-in" element={<FirstForm/>} />
              <Route path="/sign-up" element={<Signup/>} />
              <Route path="admin_home" element={<AdminHome/>} />
              <Route path="tm_home" element={<TmHome/>} />
              <Route path="tem_home" element={<TemHome/>} />
              <Route path="mu_home" element={<MuHome/>} />
              <Route path="logout" element={<LogoutComp/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App