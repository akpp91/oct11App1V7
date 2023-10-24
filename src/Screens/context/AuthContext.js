import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import { useNavigation } from "@react-navigation/native";


const AuthReducer= (state, action)=>{
    switch (action.type) {
        
        case 'add_error':
        return {...state, errorMessage:action.payloade};
        
        case 'signup':
        return {errorMessage :'', token:action.payloade};

        default:
            return state;
    }
}

const signup = (dispatch)=>{
    return async ({email , password}, callback) =>{
     try {
        const responce = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', responce.data.token);
        dispatch({type :'signup', payloade:responce.data.token })
        console.log(responce.data.token);
        callback();
     } catch (error) {
        dispatch({type : 'add_error' , payloade: 'somehing went wrong with sign up'})
     }
};
};

const signin = (dispatch)=>{
    return ({email , password}) =>{
         
    };
    };

const signout = (dispatch)=>{
        return ({email , password}) =>{
             
        };
        };
export const { Provider ,Context} = createDataContext(
    AuthReducer,
    {signin,signout, signup},
    {token: null , errorMessage:''}
)