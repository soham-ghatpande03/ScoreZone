
import { useState } from 'react';
function ScoreUpdate(){
    
   // const currentTime = Date.now();
    var teamAName="MU"
    var teamBName="LP"


    const newScore= (a,b) =>{

      fetch("localhost:8082/changeTeamAScore?ScoreA="+a+"&matchid=1")


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


      <div>
        <>
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
        </div>
      </div>
    </div>
  </div>


  
  
</div>

        </>
        </div>  
    );
}
export default  ScoreUpdate;
