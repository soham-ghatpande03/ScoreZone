
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

export default function MuLogin() {

  const nav = useNavigate();
  const init = {
    fname: { value: "", error: "", valid: false, touched: false },
    lname: { value: "", error: "", valid: false, touched: false },
    email: { value: "", error: "", valid: false, touched: false },
    contact: { value: "", error: "", valid: false, touched: false },
    username: { value: "", error: "", valid: false, touched: false },
    password: { value: "", error: "", valid: false, touched: false },
    type_id: { value: 3 },
    q_id: { value: 1 },
    q_answer: { value: "" },
    status: { value: 1 }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: { ...state[action.fld], value: action.value, error: action.error, valid: action.valid, touched: action.touched } }
      case 'reset':
        return init;
    }
  }

  const validate = (nm, val) => {
    console.log(nm + " : " + val)
    let error = "";
    let valid = false;
    let touched = true;
    switch (nm) {
      case 'fname':
        const exp1 = /[A-Za-z]{2,12}/
        if (!exp1.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'lname':
        const exp2 = /[A-Za-z]{2,12}/
        if (!exp2.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'email':
        const exp3 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if (!exp3.test(val)) {
          error = "Invalid pattern";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'contact':
        const exp4 = /[0-9]{10}/
        if (!exp4.test(val)) {
          error = "Invalid Length";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'username':
        const exp5 = /[A-Za-z]{2,12}/
        if (!exp5.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter and 1 Number  Required ";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'password':
        const exp6 = /[A-Za-z]{2,12}/
        if (!exp6.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter, 1 Number and 1 Specail Character Required ";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'type_id':
        valid = true;
        break;

      case 'q_id':
        valid = true;
        break;

      case 'q_answer':
        valid = true;
        break;
    }
    console.log(val + "," + error + "," + valid)
    dispatch({ type: 'update', fld: nm, value: val, error, valid, touched })
  }

  const [info, dispatch] = useReducer(reducer, init)

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fname: info.fname.value,
        lname: info.lname.value,
        email: info.email.value,
        contact: info.contact.value,
        username: info.username.value,
        password: info.password.value,
        type_id: info.type_id.value,
        status: info.status.value,
        q_id: info.q_id.value,
        q_answer: info.q_answer.value,
      })
    }
    fetch("http://54.243.238.129:8082/saveUser", reqOptions)
    .then((resp => {
      if(resp.ok){
        alert('Match Updater Registered..!!')
        nav("/tm_home")
        return resp.json()
       
      }
      else
      {
        alert('Error Occured...Try Again')
        window.location.reload(false)
      }

    }))
  }

  return (

    <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div className="card-body">

        <form>
          <h3>Match Updater Registration</h3>

          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              id="First_Name"
              name="First_Name"
              value={info.fname.value}
              onChange={(e) => { validate("fname", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.fname.valid && info.fname.touched) ? "block" : "none" }}>
              {info.fname.error}
            </div>

          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              id="Last_Name"
              name="Last_Name"
              value={info.lname.value}
              onChange={(e) => { validate("lname", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.fname.valid && info.fname.touched) ? "block" : "none" }}>
              {info.lname.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              id="Email"
              name="Email"
              value={info.email.value}
              onChange={(e) => { validate("email", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.email.valid && info.email.touched) ? "block" : "none" }}>
              {info.email.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Contact</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Contact No"
              id="Contact"
              name="Contact"
              value={info.contact.value}
              onChange={(e) => { validate("contact", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.contact.valid && info.contact.touched) ? "block" : "none" }}>
              {info.contact.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="Username"
              name="Username"
              value={info.username.value}
              onChange={(e) => { validate("username", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.username.valid && info.username.touched) ? "block" : "none" }}>
              {info.username.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="Password"
              name="Password"
              value={info.password.value}
              onChange={(e) => { validate("password", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.password.valid && info.password.touched) ? "block" : "none" }}>
              {info.password.error}
            </div>
          </div>

          <div className="d-grid">
            <button type="submit"
              disabled={info.fname.valid && info.lname.valid && info.password.valid && info.email.valid ? false : true}
              className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>



  )

}