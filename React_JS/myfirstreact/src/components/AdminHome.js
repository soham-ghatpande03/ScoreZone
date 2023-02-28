import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default function AdminHome() {

    return(

<div>
<nav className="navbar navbar-expand-lg navbar-light fixed-right">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              ScoreZone
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Approve Tournament Manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Approve Team Manager
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Add Venues
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
            <h1>AdminHome</h1>
        </div>
        </div>
    )
}