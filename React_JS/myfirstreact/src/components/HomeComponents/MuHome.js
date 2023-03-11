import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import img1 from '../logo1.png';


export default function MuHome() {


  const [mu, setMu] = useState(null);
  useEffect(() => {
    var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;

    console.log(uid);
    fetch("http://localhost:8082/getMU?uid=" + uid)
      .then(resp => resp.json())
      .then(obj => {
        localStorage.setItem("loggedMU", JSON.stringify(obj))
        setMu(obj);
      })
  }, [])

  return (
    <div className='background'>
      <Navbar style={{ fontSize: "15px", fontFamily: "Century Gothic" }} bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/mu_home">
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
              navbarScroll>
              <Nav.Link href="/mu_home/matchview">View Matches</Nav.Link>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
              <Nav.Link style={{ fontSize: "15px", fontFamily: "Century Gothic" }}>Welcome, {mu && mu.first_name}!</Nav.Link>
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