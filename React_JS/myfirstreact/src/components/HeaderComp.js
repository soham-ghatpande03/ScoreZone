
import { useState } from 'react';
function HeaderComp(){
    
   // const currentTime = Date.now();

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
            if(num1>0)
            setNum1(num1-1);
        }


    const[num2,setNum2]=useState(0)
    const incNum2=()=>{
        setNum2(num1+1);
        }

    const decNum2=()=>{
        if(num2>0)
        setNum2(num2-1);
    }
    
    return(
        <>
        
        <div className='main_div'>
            <table style={{width:"100%"}} >
            <thead>
                    <tr style={{textAlign:"center"}} >
                        <td aria-colspan={1} >Live Score</td>
                    </tr>
                    
                    <tr >
                        <td aria-colspan={1} >{ScoreA}-{ScoreB}</td>
                    </tr>

                    <tr>
                        <td >Team A</td>
                        <td >Team B</td>
                    </tr>
                </thead>
                <tr>
                    <td>
                    <div className='center_div'>
                        <h1>{num1}</h1>
                        <div className="btn_div">
                            <button onClick={decNum1}>-</button>
                            <button onClick={incNum1}>+</button>
                        </div>
                    </div>
                    </td>
                    <td>
                    <div className='center_div'>
                        <h1>{num2}</h1>
                        <div className="btn_div">
                            <button onClick={decNum2}>-</button>
                            <button onClick={incNum2}>+</button>
                        </div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='center_div'>
                        
                            <div className="btn_div">
                                <tr>
                                    <td>
                                <button onClick={ () => { incScoreA();} }>Update</button>
                                    </td>
                                    <td>
                                <button onClick={ () => {incScoreB();} }>Update</button>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        </>
    );
}
export default HeaderComp;
