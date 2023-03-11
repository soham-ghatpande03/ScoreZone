import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../slice";

export default function FirstForm()
{

  const init = {
    uid: { value: "", error: "", valid: false, touched: false },
    pwd: { value: "", error: "", valid: false, touched: false }
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: { ...state[action.fld], value: action.value, error: action.error, valid: action.valid, touched: action.touched } }
      case 'reset':
        return init;
    }
  }

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const validate = (nm, val) => {
    console.log(nm + " : " + val)
    let error = "";
    let valid = false;
    let touched = true;
    switch (nm) {
      case 'uid':
        const exp1 = /[A-Za-z0-9._-]{5,12}/
        if (!exp1.test(val)) {
          error = "Invalid Username";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'pwd':
        const exp2 = /[A-Za-z0-9._-]{5,12}/
        if (!exp2.test(val)) {
          error = "Invalid Password";
        }
        else {
          error = "";
          valid = true;
        }
        break;
    }
    console.log(val + "," + error + "," + valid)
    dispatch({ type: 'update', fld: nm, value: val, error, valid, touched })
  }


  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ uid: info.uid.value, pwd: info.pwd.value })
    }
    fetch("http://localhost:8082/loginchk", reqOptions)
      .then(resp => {
        if (resp.ok) {
          console.log(resp.status)
          return resp.text();
        }
        else {
          console.log(resp.statusText)
          throw new Error("Server error");
        }
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (Object.keys(obj).length === 0) {
          setMsg("Wrong Username / Password");
        }
        else {

          if (obj.user_status == 0) {
            alert("Request not Approved yet... Please wait for some time");
          }
          else {

            reduxAction(login());
            
            localStorage.setItem("loggeduser", JSON.stringify(obj));
            if (obj.type_id.type_id === 1) {
              navigate("/tm_home");
            }
            else if (obj.type_id.type_id === 2) {
              navigate("/tem_home");
            }
            else if (obj.type_id.type_id === 3) {
              navigate("/mu_home");
            }
            else if (obj.type_id.type_id === 0) {
              navigate("/admin_home");
            }

          }
        }

      })
      .catch((error) => alert("Server error. Try after some time"));
  }


  return (

    <div class="card shadow text-center" style={{ width: "40%", right: "-30%", top: "50px", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div class="card-body">

        <form>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label htmlFor="uid" className="form-label"> </label>
            <input type="text"
              className="form-control"
              placeholder="Enter Username"
              id="uid"
              name="uid"
              value={info.uid.value}
              onChange={(e) => { validate("uid", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.uid.valid && info.uid.touched) ? "block" : "none" }}>
              {info.uid.error}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label"> </label>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control" placeholder="Enter Password" id="pwd" name="pwd" value={info.pwd.value}
              onChange={(e) => { validate("pwd", e.target.value) }}
              onBlur={(e) => { validate("pwd", e.target.value) }}
            />
            <div id="emailHelp"
              className="form-text"
              style={{ display: !info.pwd.valid && info.pwd.touched ? "block" : "none" }}>
              {info.pwd.error}
            </div>
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                onClick={togglePassword}
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Show Password
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" disabled={info.uid.valid && info.pwd.valid ? false : true} className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
          <br />
          <div className="d-grid">
            <button type="reset" className="btn btn-primary" onClick={() => { dispatch({ type: 'reset' }) }}>
              Clear
            </button>
          </div>
          <br />
          <div class="text-center">
            <h5><p >Not a member? <a href='/sign-up'>Register</a></p></h5>
          </div>
        </form>
        <p> {msg}</p>
      </div>
    </div>

  )
}
