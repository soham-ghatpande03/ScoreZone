import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useReducer, useState, useEffect} from "react";
export default function TemHome() {


const [tem,setTem] = useState(null);
 useEffect(()=>{

 var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;
  fetch("http://localhost:8082/getuser?uid="+uid)
  .then(resp => resp.json())
  .then(obj => {
    localStorage.setItem("loggedTeamMan", JSON.stringify(obj))
    setTem(obj);
  })
 } ,[])

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>
                      ScoreZone
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to={'/'} >
                            View My Team
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/'}>
                            Participate
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/'}>
                            Teams
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/'}>
                            Matches
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/'}>
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
                    <h1>Welcome {tem && tem.first_name} </h1>
                </div>
                </div>
    )
}