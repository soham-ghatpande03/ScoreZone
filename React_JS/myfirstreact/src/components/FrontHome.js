//import '../bgim.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'
import img1 from '../components/logo1.png'
export default function FrontHome() 
{

  const mystate = useSelector((state)=>state.logged);
    return (
      
      <div >
        <div style={{display: mystate.loggedin ? "none" : "block"}} >
      <Navbar style={{fontSize:"25px", fontFamily:"Century Gothic"}}bg="dark" variant="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand href="/">
            <img
              src={img1}
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
            <Nav.Link href="/viewmatch"><b>LIVE MATCHES</b></Nav.Link>&nbsp
            <Nav.Link href="/allteams"><b>TEAMS</b></Nav.Link>&nbsp
            <Nav.Link href="/"><b>PLAYERS</b></Nav.Link>
            
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
          <Nav.Link href="sign-in"><Button variant="outline-success">Login</Button></Nav.Link>
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
<Outlet/>

      </div>
    )
}

