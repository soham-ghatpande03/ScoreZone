import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useReducer, useState, useEffect} from "react";
export default function AdminHome() {

  const [ad,setAd] = useState(null);
  useEffect(()=>{
 
  var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;
   fetch("http://localhost:8082/getuser?uid="+uid)
   .then(resp => resp.json())
   .then(obj => {
     localStorage.setItem("loggedAdmin", JSON.stringify(obj))
     setAd(obj);
   })
  } ,[])

    return(

<div>
<div>
            <h1>Welcome {ad && ad.first_name}</h1>
        </div>
{/* <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">
            <Link class="font-weight-bold" className="navbar-brand" to={'/'}>
              ScoreZone
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="approveTour">
                    Approve Tournament Manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="approveTeamM">
                    Approve Team Manager
                  </Link>
                </li>

                <li className="nav-item" >
                  <Link className="nav-link" to={'/logout'}  class="text-right">
                  <a name="" id="" className="btn btn-primary" href="#" role="button" >Logout</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
<nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <a style={{color:'white'}} className="navbar-brand" href="/">
            <b>ScoreZone</b>
          </a>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a style={{color:'white'}} className="nav-link" href="/admin_home/approveTour">
                  <b>Approve Tournament Manager</b>
                </a>
              </li>
              <li className="nav-item">
                <a style={{color:'white'}} className="nav-link " href="/admin_home/approveTeamM">
                <b>Approve Team Manager</b>
                </a>
              </li>
          
               <li className="nav-item">
                <a  style = {{textAlign:'right',position:'absolute',top:'12%',left:'93%'}}
                 className="nav-link btn btn-light"  
                 href="/logout">
                <b>Logout</b>
                </a>
              </li>

<span><h4 style = {{textAlign:'right',position:'absolute',top:'25%',left:'78%'}}>
Welcome, {ad && ad.first_name}
  </h4></span>
            </ul>
          </div>
        </div>
      </nav> 
        
        <Outlet />
        </div>
    )

}