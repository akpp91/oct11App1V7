 
// import { useContext } from 'react'
import createDataContext from './createDataContext'



const locationReducer =(state, action)=>{

    switch (action.type) {
        case 'add_Current_Location':
        return{...state , currentLocation:action.payload}

        case 'start-recording':
        return{...state , recording:true}
        
        case 'stop-recording':
        return{...state , recording:false}

        case 'add_location':
 
        return{...state , location:[...state.location, action.payload]}
    

        case 'name_change':
        return{...state , name:action.payload}

        case 'reset':
        return{...state , name:'' , location: []}
    
        default:
            return state;
    }
}

const changeName=dispatch =>(name) =>{
    dispatch({type:'name_change', payload:name})
    }

const startRecording=
dispatch =>() =>{
dispatch({type:'start-recording'})
}
const stopRecording=dispatch => () => {
    dispatch({type:'stop-recording'})
}

const addLocation=dispatch => (position, recording) => {
 
    dispatch({type:'add_Current_Location', payload: position})
    if (recording) {
        dispatch({type:'add_location', payload:position})
    }
}

const reset=dispatch => () => {
 
    dispatch({type:'reset'});
}

export const {Context, Provider } =createDataContext(
     locationReducer,
     {startRecording , stopRecording , addLocation , changeName , reset},
     { name:'' ,recording: false , location :[], currentLocation: null}
)