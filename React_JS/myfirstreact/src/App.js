import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FirstForm } from './components/Logging/LoginComp'
import AdminHome from './components/Admin/AdminHome'
import TemHome from './components/Team/TemHome'
import TmHome from './components/Tournament/TmHome'
import MuHome from './components/MuHome'
import { useSelector } from 'react-redux'
import FrontHome from './components/FrontHome'
import LogoutComp from './components/Logging/LogoutComp'
import Tournamentform from './components/Tournament/TournamentForm'
import './index.css';
import Signup from './components/UserRegister'
import GenerateMatchForm from './components/Match/GenerateMatch'
import RegisterTeam from './components/Team/CreateTeam'
import { ApproveTeamMan, ApproveTourMan } from './components/Admin/Approve'
import { ViewAllTeams, Viewteam } from './components/Team/DisplayTeam'
import ViewMatch from './components/Match/ViewMatch'

function App() {

  //initialState of loggedSlice
  const mystate = useSelector((state)=>state.logged);

  return (
    <Router>
      <div className="App">
        <div style={{display: mystate.loggedin ? "none" : "block"}}>
        <nav className="navbar navbar-expand-sm bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              ScoreZone
            </Link>
            
          </div>
        </nav>
        </div>
        <div className="auth-wrapper">
            {/* <div className="auth-inner"> */}
          <Routes>
              
              <Route exact path="/" element={<FrontHome/>} >
                <Route path="sign-in" element={<FirstForm/>} />  
                <Route path="viewmatch" element={<ViewMatch/>} />  
                <Route path="allteams" element={<ViewAllTeams/>} />  
                </Route>       
              <Route path="/home" element={<FrontHome/>} />
              <Route path="/sign-up" element={<Signup/> } />
              <Route path="/allteams" element={<ViewAllTeams/> } />
              <Route path="/admin_home" element={<AdminHome/>} >
                <Route path="approveTour" element={<ApproveTourMan/>} /> 
                <Route path="approveTeamM" element={<ApproveTeamMan/>} />
                </Route>


              <Route path="/tem_home" element={<TemHome/>} >
                <Route path="createteam" element={<RegisterTeam/>} />
                <Route path="viewteam" element={<Viewteam/>} />
                <Route path="allteams" element={<ViewAllTeams/> } />
                </Route>  

              <Route path="/mu_home" element={<MuHome/>} />
              <Route path="/logout" element={<LogoutComp/>} />

              <Route path="/tm_home" element={<TmHome/>} >
                <Route path="creatematch" element={<GenerateMatchForm/>} />
                <Route path="creattour" element={<Tournamentform/>} />
              </Route> 

            </Routes>
          </div>  
        </div>        

    </Router>
  )

  
}
export default App