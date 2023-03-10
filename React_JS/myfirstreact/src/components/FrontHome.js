//import '../bgim.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'
import '../App.css'
import img1 from '../components/logo1.png'
import Footer from './Footer';
export default function FrontHome() 
{
  const mystate = useSelector((state)=>state.logged);
    return (
      <div >
      <div style={{display: mystate.loggedin ? "none" : "block"}} >
      <Navbar style={{fontSize:"15px", fontFamily:"Century Gothic"}}bg="dark" variant="dark" expand="lg">
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
            style={{ maxHeight: '90px' }}
            navbarScroll
          >
            <NavDropdown title="Matches" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Live Scores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Upcoming Matches</NavDropdown.Item>
              </NavDropdown>&nbsp
            <Nav.Link href="/allteams">Teams</Nav.Link>&nbsp
            <Nav.Link href="/">Players</Nav.Link>
          </Nav>
          <Nav.Link href="sign-in"><Button variant="outline-success">Login</Button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
<Outlet/>
<Footer/>
      </div>
    )
}

