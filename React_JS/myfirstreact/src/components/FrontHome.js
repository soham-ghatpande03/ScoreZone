import '../bgim.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
export default function FrontHome() 
{
    return (
      
      <div >
       <nav className="navbar navbar-expand-sm bg-light fixed-top ">
        <div className="container-fluid">

          <Link className="navbar-brand" to={'/'}>
            ScoreZone
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'sign-in'}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'viewmatch'}>
                  View Matches
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'allteams'}>
                  View Teams
                </Link>
                
              </li>
            </ul>
          </div>
        </div>

      </nav> 
{/* 
<nav
          className="navbar navbar-expand-lg bg-light fixed-top"
          
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              VSMS
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/servicecenters">
                    Service Centers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/userlogin">
                    Login
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Register
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/customerregistration">
                        User
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/servicecenterregistration"
                      >
                        Service Center
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}


<Outlet/>
      </div>
    )
}

