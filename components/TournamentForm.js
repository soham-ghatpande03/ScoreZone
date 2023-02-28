import { useReducer} from "react";

export default function Tournamentform(){

    const init = {

        tournament_title:"",
        tournament_manager_id:"",
        start_date:"",
        end_date:"",
        participation_deadline:""
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
        fetch("http://localhost:8082/createTournament", reqOptions)
        .then(resp => console.log(resp))
    }

    return(
        <div>
            <form>
                Enter Title : <input type="text" name="title" id="title"
                 onChange={(e) => {dispatch({type:'update', fld:'tournament_title', val: e.target.value})}}/><br/>
                Enter ManagerId : <input type="number" name="managerid" id="managerid"
                 onChange={(e) => {dispatch({type:'update', fld:'tournament_manager_id', val: e.target.value})}}/><br/>
                Enter Start Date : <input type="date" name="sdate" id="sdate"
                 onChange={(e) => {dispatch({type:'update', fld:'start_date', val: e.target.value})}}/><br/>
                Enter End Date : <input type="date" name="edate" id="edate"
                 onChange={(e) => {dispatch({type:'update', fld:'end_date', val: e.target.value})}}/><br/>
                Enter Deadline Date : <input type="date" name="ddate" id="ddate" 
                 onChange={(e) => {dispatch({type:'update', fld:'participation_deadline', val: e.target.value})}}/><br/>
                <button type="submit" onClick={(e) => {sendData(e)}}>Submit</button>
                <button type="reset" onClick={() => {dispatch({type:'reset'})}}>Clear</button>
            </form>
        </div>
    )
}