import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default function TemHome() {

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
                            Register Team
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-up'}>
                            Participate
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-up'}>
                            Teams
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-up'}>
                            Matches
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
                    <h1>Match Updater</h1>
                </div>
                
        <div>
            <h1>Team Manager</h1>
        </div>
        </div>
    )
}