import '../forms.css';
import { useReducer} from "react";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


export default function RegisterTeam(){
            const navigate = useNavigate();
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const init = {

        //team specification
        tem_id:"",
        team_name:"",
        registration_date:"",
        team_description:"",
        team_logo:"",
        //registration_date:{date}.toJson
        

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
       
        fetch("http://localhost:8082/saveTeam", reqOptions)
        .then(resp => console.log(resp))
        //shanchange
        .then(obj=>{
          const fd=new FormData();
          fd.append("file",file);
          const reqOptions1 ={
            method:'POST',
            headers:{'content-type':'multipart/form-data'},
            body:fd
          }
          
          fetch("http://localhost:8082:uploadLogo/"+obj.tem_id,reqOptions1)
          .then(resp=>resp.json())
          .then(obj=>{
            if(obj){
              alert("uploaded successfully");
              navigate('/');
            }
            else{
              alert("uploaded sucessfully");
              navigate('/');
            }
          })
          
        })
        //shan change


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
      
        <div className="mb-3">
          <label>Team Manager ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your ID"
            id="Tem_Id"
            name="Tem_Id"
            value={info.Team_name}
            onChange={(e) => {dispatch({type:'update', fld:'tem_id', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label for="formFileMultiple" class="form-label">Team Logo</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>

        <div>
         {date}
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