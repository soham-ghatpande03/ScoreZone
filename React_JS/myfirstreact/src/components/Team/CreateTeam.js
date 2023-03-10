
import { useReducer} from "react";
import { format } from 'date-fns'

export default function RegisterTeam(){

    const date = format(new Date(), 'yyyy-MM-dd')
    const teamMan = JSON.parse(localStorage.getItem("loggedTeamMan"));

    const init = {
      team_name: {value:"",error:"",valid:false, touched:false},
      team_manager_id: {value:teamMan.uid ,error:"",valid:false, touched:true},
      registration_date:{value: date ,error:"",valid:false, touched:true},
      team_description: {value:"",error:"",valid:false, touched:false},
      team_logo: {value:"",error:"",valid:false, touched:false}
  }

  const reducer = (state, action) => {
    switch(action.type)
    {
        case 'update':
             return {...state , [action.fld]: {  ...state[action.fld],value: action.value, error: action.error, valid: action.valid, touched: action.touched}}
        case 'reset' :
             return init;
    }
}

const validate = (nm,val) => {
  console.log(nm+ " : "+val)
   let error = "";
   let valid = false;
   let touched = true;
   switch(nm)
   {
       case 'team_name' :
            const exp1 = /^[A-Za-z]{5,12}$/
            if(!exp1.test(val))
            {
               error = "Atleast 1 Capital Letter, 1 Small Letter , No Alphanumeric";                    
            }
            else
            {
               error ="";
               valid = true;
            }
            break;

            case 'team_description':
             const exp2 = /[A-Za-z0-9/s]{5,100}/
            if(!exp2.test(val))
            {
               error = "Atleast 1 Capital Letter, 1 Small Letter";                    
            }
            else
            {
               error ="";
               valid = true;
            }
            break; 

             case 'team_logo':
                valid = true;
                break; 

                        
   }
   console.log(val+","+error+","+valid)
   dispatch({type: 'update', fld: nm,value: val,error, valid, touched})
}

const [info, dispatch] = useReducer(reducer, init)

const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(
          {team_name:info.team_name.value,
          team_manager_id:info.team_manager_id.value,
          registration_date:info.registration_date.value,
          team_description:info.team_description.value,
          team_logo:info.team_logo.value,
          })
    }
    fetch("http://localhost:8082/saveTeam", reqOptions)
        .then(resp => console.log(resp))
        .then(alert('You have Sucessfully Created Your Team'))
        .then(window.location.reload(false))
}


return(
    <div className="auth-wrapper">
    <div className="auth-inner">
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
            value={info.team_name.value}
            onChange={(e)=>{validate("team_name", e.target.value)}}
          />
          <div 
                    id="emailHelp"
                     className="form-text" 
                     style={{display: (!info.team_name.valid&&info.team_name.touched)?"block":"none"}}>
                    {info.team_name.error}
                    </div>
        </div>

        <div className="mb-3">
          <label>Team Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Description of your Team / Team History"
            id="Team_Description"
            name="Team_Description"
            value={info.team_description.value}
            onChange={(e)=>{validate("team_description", e.target.value)}}
          />
            <div 
                    id="emailHelp"
                     className="form-text" 
                     style={{display: (!info.team_description.valid&&info.team_description.touched)?"block":"none"}}>
                    {info.team_description.error}
                    </div>
        </div>
        
        <div className="mb-3">
          <label>Team Logo</label>
          <input
            type="tv "
            className="form-control"
            placeholder="Enter URL of Team Logo"
            id="team_logo"
            name="team_logo"
            value={info.team_logo.value}
            onChange={(e)=>{validate("team_logo", e.target.value)}}
          />
            
        </div>
        <div className="d-grid">
          <button 
          disabled={info.team_logo.valid && info.team_description.valid && info.team_name.valid ? false : true}
          type="submit" className="btn btn-primary" onClick={(e) => {sendData(e)}}>
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
    )

}