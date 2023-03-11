import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { FirstForm } from './components/Logging/LoginComp'
import AdminHome from './components/Admin/AdminHome'
import TemHome from './components/Team/TemHome'
import TmHome from './components/Tournament/TmHome'
import MuHome from './components/MatchUpdater/MuHome'
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
import { AddTeam } from './components/Team/Participate'
import MyTournaments from './components/Tournament/MyTournaments'
import AllPlayers from './components/AllPlayers'
import MuLogin from './components/MatchUpdater/MULogin'
import ViewMatchesMatchUpdator from './components/MatchUpdater/MatchViewAssigned'
import ScoreUpdate from './components/MatchUpdater/ScoreUpdate'

function App() {

  return (

    <Router>
      <Routes>
              
              <Route exact path="/" element={<FrontHome/>} >
                <Route path="sign-in" element={<FirstForm/>} />  
                <Route path="/sign-up" element={<Signup/> } />
                <Route path="players" element={<AllPlayers/> } />
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
                <Route path="participate" element={<AddTeam/>} /> 
                <Route path="allteams1" element={<ViewAllTeams/> } />
                <Route path="viewmatch" element={<ViewMatch/>} />  
                </Route>  

              <Route path="/mu_home" element={<MuHome/>} >
              <Route path="matchview" element={<ViewMatchesMatchUpdator/>} />
              <Route path="updatescore" element={<ScoreUpdate/>} />   
              </Route>  
              
              <Route path="/tm_home" element={<TmHome/>} >
                <Route path="creatematch" element={<GenerateMatch/>} />
                <Route path="mytours" element={<MyTournaments/>} />
                <Route path="creattour" element={<Tournamentform/>} />
                <Route path="mulogin" element={<MuLogin/>} />
              </Route> 


              <Route path="/logout" element={<LogoutComp/>} />

            </Routes>
    </Router>
   
  )

  
}
export default App