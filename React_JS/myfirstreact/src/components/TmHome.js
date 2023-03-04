import { BrowserRouter as Router, Routes, Route, Link , Outlet} from 'react-router-dom'
import { useReducer, useState, useEffect} from "react";
export default function TmHome() {


  const [tm,setTm] = useState(null);
 useEffect(()=>{

 var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;
 console.log(uid);
  fetch("http://localhost:8082/getuser?uid="+uid)
  .then(resp => resp.json())
  .then(obj => {
    localStorage.setItem("loggedTourMan", JSON.stringify(obj))
    setTm(obj);
  })
 } ,[])

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                      ScoreZone
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to={'creattour'}>
                            Create Tournament
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'creatematch'}>
                            Generate Matches
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/'}>
                            Teams
                          </Link>
                        </li>                  
                        <li className="nav-item">
                        <Link className="nav-link" to={'/logout'}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
        <br/>
        <br/>
                <div>
                    <h1>Tournament Manager</h1>
                    <h1>Welcome {tm && tm.first_name} </h1>

                    
                </div>  
                <Outlet/>
                </div>
    )
}