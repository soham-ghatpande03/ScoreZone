import '../forms.css';
import { useReducer} from "react";


export default function Register(){

    const init = {

        
        first_name: "",
        last_name: "",
        email: "",
        contact: "",
        username: "",
        password: "",
        type_id:"",
        security_qid: "",
        q_answer: ""

    }

    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'update' :
                return {...state , [action.fld]:action.val}
            case 'reset' :
                return init;
        }
    }

    const [info, dispatch] = useReducer(reducer, init)

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8082/saveUser", reqOptions)
        .then(resp => console.log(resp))

    }

return(
    <div>
      <form>
        <h3>Registration Form</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            id="First_Name"
            name="First_Name"
            value={info.first_name}
            onChange={(e) => {dispatch({type:'update', fld:'first_name', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            id="Last_Name"
            name="Last_Name"
            value={info.last_name}
            onChange={(e) => {dispatch({type:'update', fld:'last_name', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            id="Email"
            name="Email"
            value={info.email}
            onChange={(e) => {dispatch({type:'update', fld:'email', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Contact</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Contact No"
            id="Contact"
            name="Contact"
            value={info.contact}
            onChange={(e) => {dispatch({type:'update', fld:'contact', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            id="Username"
            name="Username"
            value={info.username}
            onChange={(e) => {dispatch({type:'update', fld:'username', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            id="Password"
            name="Password"
            value={info.password}
            onChange={(e) => {dispatch({type:'update', fld:'password', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Security Question</label><br></br>
          <select>
            <option value={info.security_qid}   onChange={(e) => {dispatch({type:'update', fld:'security_qid', val: 1})}}>Place</option>
            <option value={info.security_qid}   onChange={(e) => {dispatch({type:'update', fld:'security_qid', val: 2})}}>Color</option>
            <option value={info.security_qid}   onChange={(e) => {dispatch({type:'update', fld:'security_qid', val: 3})}}>Pet</option>
            </select>
        </div>

        <div className="mb-3">
          <label>Security Answer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Answer"
            id="Answer"
            name="Answer"
            value={info.q_answer}
            onChange={(e) => {dispatch({type:'update', fld:'q_answer', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>User type</label><br></br>
          <select>
            <option value={info.type_id}  onChange={(e) => {dispatch({type:'update', fld:'type_id', val:1})}}>Tournament Manager</option>
            <option value={info.type_id}  onChange={(e) => {dispatch({type:'update', fld:'type_id', val:2})}}>Team Manager</option>
            </select>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={(e) => {sendData(e)}}>
            Submit
          </button>
        </div>
      </form>
      </div>
    )

}