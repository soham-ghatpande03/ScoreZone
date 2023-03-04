
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

var FirstForm = ()=>{

    const init = {
      uid: {value:"",error:"",valid:false, touched:false},
      pwd:{value:"",error:"",valid:false, touched:false}
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
    const reduxAction =  useDispatch();

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



    let sendData1 = (e) =>{
        e.preventDefault();
        const regOptions ={
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({uid: info.uid.value , pwd:info.pwd.value})
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

                    reduxAction(login());
                    localStorage.setItem("loggeduser" , JSON.stringify(obj));
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
      <div className="auth-wrapper">
      <div className="auth-inner"> 
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
          </div>
          <p>{msg}</p>
          </div>
      </div>
        )

}

// var Signup = ()=>{
//     return (
//       <div className="auth-wrapper">
//       <div className="auth-inner"> 
//       <form>
//         <h3>Sign Up</h3>
//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//       </div>
//       </div>
//     )
//   }


  var NewLogin = ()=>{
    return(
      <div>
      
      <a href="https://front.codes/" class="logo" target="_blank">
		<img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
	</a>

	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" class="btn mt-4">submit</a>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" class="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
  </div>
    );
  }
export {FirstForm , NewLogin};