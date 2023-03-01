import '../forms.css';
import { useReducer} from "react";


export default function Register(){

    const init = {

        //team specification
        team_id:"",
        team_name:"",
        registration_date:"",
        team_description:"",
        team_logo:"",
        

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
        fetch("http://localhost:8082/saveteam", reqOptions)
        .then(resp => console.log(resp))

    }

return(
    <div>
      <form>
        <h3>Team Registration Form</h3>

        <div className="mb-3">
          <label>Team Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Team Name"
            id="Team_Name"
            name="Team_Name"
            value={info.Team_name}
            onChange={(e) => {dispatch({type:'update', fld:'team_name', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Team Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Description of your Team"
            id="Team_Description"
            name="Team_Description"
            value={info.team_description}
            onChange={(e) => {dispatch({type:'update', fld:'team_description', val: e.target.value})}}
          />
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