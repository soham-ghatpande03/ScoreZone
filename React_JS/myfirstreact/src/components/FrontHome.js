import '../bgim.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
export default function FrontHome() 
{
    return (
      
      <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            ScoreZone
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  View Matches
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/allteams'}>
                  View Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      <section class="first">

<div class="container">

  
</div>

</section>
<Outlet/>
      </div>
    )
}

