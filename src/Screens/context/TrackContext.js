import instance from "../api/tracker";


const { default: createDataContext } = require("./createDataContext");


const trackReducer=(state , action) =>{
switch (action.type) {
    case 'fetch_track':
        return action.payload;
        break;

    default:
        state;
}
}
const fetchTracks = dispatch =>async () =>{
const  response=await instance.get('/tracks')
dispatch({type:'fetch_track',payload:response.data})
};

const createTracks = dispatch => async (name, locations) => {
    
    await instance.post('/tracks', { name, locations });
};


export const {Provider,Context  } =createDataContext(
    trackReducer,
    {fetchTracks, createTracks},
    []
)