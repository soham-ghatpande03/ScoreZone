import { useState } from 'react';
export default function ScoreUpdate()
{
  
   // const currentTime = Date.now();

    
    var m= JSON.parse(localStorage.getItem("Match"));
    var teamAName=m.team_id_a.team_name;
    var teamBName=m.team_id_b.team_name;
    console.log(m.match_id);

    const newScore= (a,b) =>{
      fetch("http://localhost:8082/updateScores?teama="+a+"&teamb="+b+"&matchid="+m.match_id)
      .then(resp => resp.json())
			.then(obj => {
				console.log(JSON.stringify(obj))
				if (obj===1) {
					alert("Updation done")
        }}
				)
    }

    const winTeam= (teamid) =>{
      fetch("http://localhost:8082/changeTeamMatchStatusWin?teamid="+teamid)
      .then(resp => resp.json())
			.then(obj => {
				console.log(JSON.stringify(obj))
				if (obj===1) {
					alert("Updation done")
        }}
				)
    }

    const looseTeam= (teamid) =>{
      fetch("http://localhost:8082/changeTeamMatchStatusLoose?teamid="+teamid)
      .then(resp => resp.json())
			.then(obj => {
				console.log(JSON.stringify(obj))
				if (obj===1) {
					alert("Updation done")
        }}
				)
    }


    

    const[ScoreA,setScoreA]=useState(0)
        const incScoreA=()=>{
            setScoreA(ScoreA+num1)
            
        }

    const[ScoreB,setScoreB]=useState(0)
        const incScoreB=()=>{
            setScoreB(ScoreB+num2)
        }

    const[num1,setNum1]=useState(0)

        const incNum1=()=>{
            setNum1(num1+1);
            }

        const decNum1=()=>{
            
            setNum1(num1-1);
        }


    const[num2,setNum2]=useState(0)

    const incNum2=()=>{
        setNum2(num2+1);
        }

    const decNum2=()=>{
        
        setNum2(num2-1);
    }
    
    return(

      <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
            <div className="card-body">
        <div class="row">
          <h1 style={{textAlign:'center'}}>Live Score Update</h1>
          <h2 style={{textAlign:'center'}}>{ScoreA}-{ScoreB}</h2>
          {/*Team A*/}
          <div class="col-sm-6">
          <div class="card">
          <div class="card-body">
            <h5 class="card-title" style={{textAlign:'center'}}>{teamAName}</h5>
          <p class="card-text" style={{textAlign:'center'}}>{num1}</p>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  
          disabled ={num1<0 ? true : false}
          class="btn btn-primary" onClick={decNum1} >-</button>
          <button 
          disabled ={num1>0 ? true : false}
          class="btn btn-primary" onClick={incNum1} >+</button>
          </div><br></br>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => { 
            newScore(ScoreA , ScoreB);
            incScoreA();} } >Update</button>
        </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => {winTeam(m.team_id_a.team_id) } } >Winner</button>
        </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => {looseTeam(m.team_id_a.team_id) } } >Looser</button>
        </div>
        
      </div>
    </div>
    
  </div>

{/*Team B*/}
<div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style={{textAlign:'center'}}>{teamBName}</h5>
        <p class="card-text" style={{textAlign:'center'}}>{num2}</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  
          disabled ={num2<0 ? true : false}
          class="btn btn-primary" onClick={decNum2} >-</button>
          <button  
          disabled ={num2>0 ? true : false}
          class="btn btn-primary" onClick={incNum2} >+</button>
          </div><br></br>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => { 
            newScore(ScoreA , ScoreB);
            incScoreB();} } >Update</button>
        </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => {winTeam(m.team_id_b.team_id) } } >Winner</button>
        </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => {looseTeam(m.team_id_b.team_id) } } >Looser</button>
        </div>
      </div>
    </div>
    
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button  class="btn btn-primary" onClick={ () => {} } >End Match</button>
        </div>

  
  
</div>

        </div>
        </div>  
    );
          }

