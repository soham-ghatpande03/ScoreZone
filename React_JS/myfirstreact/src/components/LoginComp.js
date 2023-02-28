
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

var FirstForm = ()=>{

    var[flag,setFlag] = useState(false)
    var[nm,setNm] = useState("")

    const init = {
        uid: "",
        pwd :"",
    }


    const reducer =(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
    
        }
    }
    
    const [info,dispatch] = useReducer(reducer,init);
    const [msg,setMsg]  = useState("");
    const navigate = useNavigate();
    let sendData1 = (e) =>{
        e.preventDefault();
        const regOptions ={
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8082/loginchk",regOptions)
        .then(resp=> {if(resp.ok)
                         return resp.text();
                    else
                    throw new Error("server error")
                    
                        })
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {

            if(Object.keys(obj).length === 0)
            {
                setMsg("Wrong Username / Password ")
            } 
            else
            {
                if(obj.status === false)
                {
                    alert("req not approveed");
                }
                else{
                    if(obj.type_id.type_id === 1)
                    {
                        navigate("/tm_home");
                    }
                    else if(obj.type_id.type_id === 2)
                    {
                        navigate("/tem_home");
                    }
                    else if(obj.type_id.type_id === 3)
                    {
                        navigate("/mu_home");
                    }
                    else if(obj.type_id.type_id === 0)
                    {
                        navigate("/admin_home");
                    }
                }
            }
        })
        .catch((error) => alert("server error...try after some time"));
    }


    return(
        <div>
          <form>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                id="uid"
                name="uid"
                value={info.uid}
                onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="pwd"
                name="pwd"
                value={info.pwd}
                onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData1(e)}}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
          <p>{msg}</p>
          </div>
        )

}

var Signup = ()=>{
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }

export {FirstForm , Signup};