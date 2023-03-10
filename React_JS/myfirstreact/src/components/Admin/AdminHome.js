import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

    

{/* <div>
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
        </nav> 
{/* <nav className="navbar navbar-expand-lg bg-dark fixed-top">
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
        </div> */}

        return(
        <div >
      <Navbar style={{fontSize:"25px", fontFamily:"Century Gothic"}}bg="dark" variant="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand href="/">
            <img
              src=""
              width="350"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> 
          </Navbar.Brand>&nbsp
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/viewmatch"><b>APPROVE TOURNAMENT MANAGER</b></Nav.Link>&nbsp
            <Nav.Link href="/allteams"><b>APPROVE TEAM MANAGER</b></Nav.Link>&nbsp
            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Nav.Link href="sign-in">
            
            <Button variant="outline-success">Login</Button>
            
            
            </Nav.Link>
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Outlet/>

      </div>
    )

}