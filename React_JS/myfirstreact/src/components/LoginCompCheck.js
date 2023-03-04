import { useReducer , useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

export default function LoginComp () {

    const init = {
        uid: {value:"",error:"",valid:false, touched:false},
        pwd:{value:"",error:"",valid:false, touched:false}
    }

    const reducer = (state, action) => {
            switch(action.type)
            {
                case 'update':
                     return {...state , [action.fld]: {  ...state[action.fld],value: action.val, error: action.error, valid: action.valid, touched: action.touched}}
                case 'reset' :
                     return init;
            }
    }

    const [info, dispatch] = useReducer(reducer,init) ;
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const reduxAction  = useDispatch();

    const validate = (nm,val) => {
        let error = "";
        let valid = false;
        let touched = true;
        switch(nm)
        {
            case 'uid' :
                 const exp1 = /[A-Za-z0-9._-]{5,12}/
                 if(!exp1.test(val))
                 {
                    error = "Invalid UID";                    
                 }
                 else
                 {
                    error ="";
                    valid = true;
                 }
                 break;

            case 'pwd':

            const exp2 = /[A-Za-z0-9._-]{3,12}/
                 if(!exp2.test(val))
                 {
                    error = "Invalid UID";                    
                 }
                 else
                 {
                    error ="";
                    valid = true;
                 }
                 break;    
        }
        console.log(val+","+error+","+valid)
        dispatch({type: 'update', fld: nm,value: val,error, valid, touched})
    }


    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({uid: info.uid.value , pwd:info.pwd.value})
        }
        fetch("http://localhost:8080/chkLogin",reqOptions)
        .then(resp =>  {if(resp.ok)
                        {
                            console.log(resp.status)
                            return resp.text();
                        }    
                         else
                         {
                            console.log(resp.statusText)
                             throw new Error("Server error"); 
                         }
                        })
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj =>  {
                       if(Object.keys(obj).length === 0)
                       {
                            setMsg("Wrong UID/PWD");
                       } 
                       else
                       {
                           reduxAction(login())
                           localStorage.setItem("loggedUser",JSON.stringify(obj));
                           if(obj.status === false) 
                           {
                               alert("Request has not been approved");
                           }
                           else
                           {

                               if(obj.role_id.role_id === 1)
                               {
                                    navigate("/admin_home");
                               }
                               else if(obj.role_id.role_id === 2)
                               {
                                    navigate("/doctor_home");
                               }
                               else if(obj.role_id.role_id === 3)
                               {

                               }
                               else if(obj.role_id.role_id === 4)
                               {

                               }
                           }
                       }    
                })
         .catch((error) => alert("Server error. Try after some time"));       
    }


    return (
        <div>
            <h1> Login Page </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="uid" className="form-label">Enter uid : </label>
                    <input type="text" 
                    className="form-control" 
                    id="uid" 
                    name="uid" 
                    value={info.uid.value}
                    onChange={(e)=>{validate("uid", e.target.value)}}   />
                    <div 
                    id="emailHelp"
                     className="form-text" 
                     style={{display: (!info.uid.valid&&info.uid.touched)?"block":"none"}}>
                    {info.uid.error}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter uid : </label>
                    <input type="password" className="form-control" id="pwd" name="pwd"  value={info.pwd.value} 
                    onChange={(e)=>{validate("pwd", e.target.value)}} />
                    <div id="emailHelp"
                     className="form-text" 
                     style={{display: !info.pwd.valid&&info.pwd.touched?"block":"none"}}> 
                    {info.pwd.error}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={()=> {dispatch({type:'reset'})}} > Clear </button>

              
            </form>

            <p> {JSON.stringify(info)}</p>
            <p> {msg}</p>
        </div>
    )
}