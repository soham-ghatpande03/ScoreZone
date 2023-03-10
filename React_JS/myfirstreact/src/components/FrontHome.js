//import '../bgim.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../index.css'
export default function FrontHome() 
{

  const mystate = useSelector((state)=>state.logged);
    return (
      
      <div >
        <div style={{display: mystate.loggedin ? "none" : "block"}} >
<nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container-fluid">
            <a style={{color:'white'}} className="navbar-brand" href="/">
              <b>ScoreZone</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a style={{color:'white'}} className="nav-link" href="viewmatch">
                    <b>View Matches</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a style={{color:'white'}} className="nav-link " href="allteams">
                  <b>View Teams</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a  style = {{textAlign:'right',position:'absolute',top:'10%',left:'93%'}}
                   className="nav-link btn btn-light"  
                   href="sign-in">
                  <b>Login</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
        
        </div>
       

<Outlet/>

      </div>
    )
}

