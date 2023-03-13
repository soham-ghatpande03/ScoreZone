import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FirstForm from './components/LoginRegistrationComponents/LoginComp'
import AdminHome from './components/HomeComponents/AdminHome'
import TemHome from './components/HomeComponents/TemHome'
import TmHome from './components/HomeComponents/TmHome'
import MuHome from './components/HomeComponents/MuHome'
import FrontHome from './components/HomeComponents/FrontHome'
import LogoutComp from './components/LoginRegistrationComponents/LogoutComp'
import Tournamentform from './components/TournamentComponents/TournamentForm'
import Signup from './components/LoginRegistrationComponents/UserRegister'
import RegisterTeam from './components/TeamComponents/CreateTeam'
import { ApproveTeamMan, ApproveTourMan } from './components/Approve'
import { ViewAllTeams, Viewteam } from './components/TeamComponents/DisplayTeam'
import ViewMatch from './components/MatchComponents/ViewMatch'
import GenerateMatch from './components/MatchComponents/GenerateMatch'
import { AddTeam } from './components/TeamComponents/Participate'
import MyTournaments from './components/TournamentComponents/MyTournaments'
import AllPlayers from './components/PlayerComponents/AllPlayers'
import MuLogin from './components/LoginRegistrationComponents/MULogin'
import ViewMatchesMatchUpdator from './components/ScoreComponents/MatchViewAssigned'
import ScoreUpdate from './components/ScoreComponents/ScoreUpdate'
import AddPlayer from './components/PlayerComponents/AddPlayer';
import ShowVenues from './components/VenueComponents/ShowVenues';
import AddVenue from './components/VenueComponents/AddVenue';
import ParticipatedTeams from './components/ParticipatedTeams';


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
                <Route path="showVenues" element={<ShowVenues/>} />
                <Route path="addvenue" element={<AddVenue/>} />
                </Route>

              <Route path="/tem_home" element={<TemHome/>} >
                <Route path="createteam" element={<RegisterTeam/>} />
                <Route path="viewteam" element={<Viewteam/>} />
                <Route path="participate" element={<AddTeam/>} /> 
                <Route path="allteams1" element={<ViewAllTeams/> } />
                <Route path="viewmatch" element={<ViewMatch/>} />  
                <Route path="addplayer" element={<AddPlayer/>} />  
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
                <Route path="partiteam" element={<ParticipatedTeams/>} />
              </Route> 


              <Route path="/logout" element={<LogoutComp/>} />

            </Routes>
    </Router>
   
  )

  
}
export default App