import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useReducer, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import img1 from '../logo1.png';
export default function TmHome() {


  const [tm, setTm] = useState(null);
  useEffect(() => {

    var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;
    console.log(uid);
    fetch("http://localhost:8082/getTourMan?uid=" + uid)
      .then(resp => resp.json())
      .then(obj => {
        localStorage.setItem("loggedTourMan", JSON.stringify(obj))
        setTm(obj);
      })
  }, [])

  return (
    <div className='background'>
      <Navbar style={{ fontSize: "15px", fontFamily: "Century Gothic" }} bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/tm_home">
            <img
              src={img1}
              width="350"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo" />
          </Navbar.Brand>&nbsp
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <NavDropdown style={{ fontSize: "15px", fontFamily: "Century Gothic" }}
                title="Tournament" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/tm_home/mytours">My Tournaments</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/tm_home/creattour">Create Tournament</NavDropdown.Item>
              </NavDropdown>&nbsp

              <Nav.Link href="/tm_home/creatematch">Generate Matches</Nav.Link>&nbsp
              <Nav.Link href="/tm_home">Participated Teams</Nav.Link>&nbsp
              <NavDropdown style={{ fontSize: "15px", fontFamily: "Century Gothic" }}
                title="Match Updater" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/tm_home/mulogin">Create Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/tm_home/creattour">Show Match Updaters</NavDropdown.Item>
              </NavDropdown>&nbsp&nbsp&nbsp&nbsp&nbsp
              <Nav.Link style={{ fontSize: "15px", fontFamily: "Century Gothic" }}>Welcome, {tm && tm.first_name}!</Nav.Link>
            </Nav>
            <DropdownButton
              align="end"
              title="Profile"
              id="dropdown-button-dark-example1"
              variant="secondary">
              <Dropdown.Item eventKey="1" href="">Update Profile</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="/logout">Logout</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}