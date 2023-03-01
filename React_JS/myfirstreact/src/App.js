import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FirstForm } from './components/LoginComp'
import AdminHome from './components/AdminHome'
import TemHome from './components/TemHome'
import TmHome from './components/TmHome'
import MuHome from './components/MuHome'
import { useSelector } from 'react-redux'
import FrontHome from './components/FrontHome'
import LogoutComp from './components/LogoutComp'
import Tournamentform from './components/TournamentForm'
import './index.css';
import Signup from './components/UserRegister'

function App() {

  //initialState of loggedSlice
  const mystate = useSelector((state)=>state.logged);

  return (
    <Router>
      <div className="App">
        <div style={{display: mystate.loggedin ? "none" : "block"}}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
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
            {/* <div className="auth-inner"> */}
          <Routes>
              <Route path="/sign-in" element={<FirstForm/>} className="auth-inner" />
              <Route exact path="/" element={<FrontHome/>} />
              <Route path="/home" element={<FrontHome/>} />
              <Route path="/sign-up" element={<Signup/> }className="auth-inner" />
              <Route path="/admin_home" element={<AdminHome/>} />
              <Route path="/tm_home" element={<TmHome/>} />
              <Route path="/tem_home" element={<TemHome/>} />
              <Route path="/mu_home" element={<MuHome/>} />
              <Route path="/logout" element={<LogoutComp/>} />
              <Route path="/creattour" element={<Tournamentform/>} className="auth-inner" />
            </Routes>
          </div>  
        </div>        

    </Router>
  )

  
}
export default App