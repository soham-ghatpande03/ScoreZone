import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useReducer, useState, useEffect} from "react";
export default function TemHome() {


const [tem,setTem] = useState(null);
 useEffect(()=>{
 var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;
 console.log(uid);
  fetch("http://localhost:8082/getuser?uid="+uid)
  .then(resp => resp.json())
  .then(obj => {
    localStorage.setItem("loggedTeamMan", JSON.stringify(obj))
    setTem(obj);
  })
 } ,[])

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container-fluid">
            <Link style={{color:'white'}} className="navbar-brand" to={'/'}>
              <b>ScoreZone</b>
            </Link>
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link style={{color:'white'}} className="nav-link" to={'createteam'}>
                    <b>Create Team</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} className="nav-link " to={'viewteam'}>
                  <b>View My Team</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} className="nav-link " to={'/'} >
                  <b>Participate</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} className="nav-link "  to={'allteams1'}>
                  <b>View Teams</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{color:'white'}} className="nav-link "  to={'/'} >
                  <b>Profile</b>
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link  style = {{textAlign:'right',position:'absolute',top:'12%',left:'93%'}}
                   className="nav-link btn btn-light"  
                   to={'allteams1'}>
                  <b>Logout</b>
                  </Link>
                </li>

  <span><h4 style = {{textAlign:'right',position:'absolute',top:'25%',left:'78%'}}>
  Welcome, {tem && tem.first_name}
    </h4></span>
              </ul>
            </div>
          </div>
        </nav> 
                <Outlet />
                </div>
    )
}