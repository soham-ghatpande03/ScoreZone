import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default function MuHome() {

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
                  <Link className="nav-link" to={'/sign-in'}>
                    View Matches
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
            <h1>Match Updater</h1>
        </div>
        </div>
    )
}