import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FirstForm } from './components/Logging/LoginComp'
import AdminHome from './components/Admin/AdminHome'
import TemHome from './components/Team/TemHome'
import TmHome from './components/Tournament/TmHome'
import MuHome from './components/MatchUpdator/MuHome'
import ViewMatchesMatchUpdator from './components/MatchUpdator/MatchViewAssigned'
import FrontHome from './components/FrontHome'
import LogoutComp from './components/Logging/LogoutComp'
import Tournamentform from './components/Tournament/TournamentForm'
import './index.css';
import Signup from './components/UserRegister'
import RegisterTeam from './components/Team/CreateTeam'
import { ApproveTeamMan, ApproveTourMan } from './components/Admin/Approve'
import { ViewAllTeams, Viewteam } from './components/Team/DisplayTeam'
import ViewMatch from './components/Match/ViewMatch'
import GenerateMatch from './components/Match/GenerateMatch'

function App() {

  //initialState of loggedSlice
  

  return (
    
    <Router>
      <Routes>
              
              <Route exact path="/" element={<FrontHome/>} >
                <Route path="sign-in" element={<FirstForm/>} />  
                <Route path="/sign-up" element={<Signup/> } />
                <Route path="viewmatch" element={<ViewMatch/>} />  
                <Route path="allteams" element={<ViewAllTeams/>} />  
                <Route path="/logout" element={<LogoutComp/>} />
                </Route>   
                
              

              <Route path="/admin_home" element={<AdminHome/>} >
                <Route path="approveTour" element={<ApproveTourMan/>} /> 
                <Route path="approveTeamM" element={<ApproveTeamMan/>} />
                </Route>


              <Route path="/tem_home" element={<TemHome/>} >
                <Route path="createteam" element={<RegisterTeam/>} />
                <Route path="viewteam" element={<Viewteam/>} />
                <Route path="allteams1" element={<ViewAllTeams/> } />
                <Route path="viewmatch" element={<ViewMatch/>} />  
                </Route>  

              <Route path="/mu_home" element={<MuHome/>} />
              <Route path="/logout" element={<LogoutComp/>} />
              <Route path="/MatchViewAssigned" element={<ViewMatchesMatchUpdator/>} />

              <Route path="/tm_home" element={<TmHome/>} >
                <Route path="creatematch" element={<GenerateMatch/>} />
                <Route path="creattour" element={<Tournamentform/>} />
              </Route> 

            </Routes>
    </Router>
   
  )

  
}
export default App