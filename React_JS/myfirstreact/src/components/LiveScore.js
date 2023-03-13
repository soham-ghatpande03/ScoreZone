//npm install --save react react-live-clock
//npm install moment --save
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


import React, { useEffect,useState,useRef} from 'react';


function Score() {
    //Score Related settings

    const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8082/getTeamNamesByMatchStatus")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  
    }, []);

    
    var Team_A_Score=data.team_a_score
    var Team_B_Score=data.team_b_score
    var Team_A_Name="vdf"
    var Team_B_Name="df"
        
       // fetch("http://localhost:8082/getTeamNamesByMatchStatus")
        
     

      ////
    

      
     
      //console.log(teamName.team_id_a.team_name)

       
   


        
        
        

    
    //timeout
    return (
        <div>
        <div className="App">
            <div className='main_div'>
                

                <>
                
                <div className='background'>
      <div>
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
              <NavDropdown.Item href="/livescore">Live Scores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/viewmatch">Upcoming Matches</NavDropdown.Item>
              </NavDropdown>&nbsp
            <Nav.Link href="/allteams">Teams</Nav.Link>&nbsp
            <Nav.Link href="/players">Players</Nav.Link>
          </Nav>
          <Nav.Link href="sign-in"><Button variant="outline-success">Login</Button></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
<Outlet/>

<>
                <table style={{width:"100%"}} >
                    <thead>
                        <tr>
                            <h1 align="center" style={{color:"white",textShadow:"0px 10px 10px black"}}>Current Time</h1>
                            {/* <h2 align="center" style={{color:"white"}}> {ctime}</h2> */}
                        </tr>

                        {/* <tr>
                            <h1 style={{color:"white",textShadow:"0px 10px 10px black"}}>Timer</h1>
                            
                            <h1 style={{color:"white",textShadow:"0px 10px 10px black"}}>{timerHours}:{timerMinutes}:{timerSeconds}</h1>
                        </tr> */}

                        <tr style={{textAlign:"center"}} >
                            <td aria-colspan={1} style={{color:"white",fontSize:"70px",textShadow:"0px 10px 10px black"}} >Live Score</td>
                        </tr>

                        <tr >
                           
                            <td aria-colspan={1} style={{color:"white",fontSize:"100px",textShadow:"0px 10px 10px black"}}>{Team_A_Score}-{Team_B_Score}</td>
                        </tr>

                        <tr>
                            <td colSpan={1} style={{color:"white",fontSize:"50px" ,textShadow:"0px 10px 10px black"}}>{Team_A_Name}-{Team_B_Name}</td>
                            
                        </tr>
                        {/* <button onClick={startMatch()}>click me</button> */}
                    </thead>
                </table>

</>



      </div>
                
                </>
                
            </div>
        </div>
       
        </div>
    )
}

export default Score;
