import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";
import { useNavigation } from "@react-navigation/native";


const AuthReducer = (state, action) => {
    switch (action.type) {

        case 'add_error':
            return { ...state, errorMessage: action.payloade };

        case 'signip':
            return { errorMessage: '', token: action.payloade };

        case 'clear_Error_Message':
            return { ...state, errorMessage: '' }
        
        case 'signout':
            return { token :null ,errorMessage: ''};
            default:
            return state;
    }
}

const signup = (dispatch) => {
    return async ({ email, password }, callback) => {
        try {
            const responce = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', responce.data.token);
            dispatch({ type: 'signip', payloade: responce.data.token })
            console.log(responce.data.token);
            callback();
        } catch (error) {
            dispatch({ type: 'add_error', payloade: 'somehing went wrong with sign up' })
        }
    };
};

const signin = (dispatch) => {
    return async ({ email, password }, callback) => {
        try {
            const responce = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', responce.data.token);
            dispatch({ type: 'signin', payloade: responce.data.token });
            //use here callback
            callback();
        } catch (error) {
            dispatch({
                type: "add_error",
                payloade: 'something went wrong with sign In'
            })
        }
    };
};


const tryLocalSignIn = dispatch => async (navigation) => {

    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payloade: token });
        navigation.navigate('MyTabs');
    }
    else {
        navigation.navigate('SignInScreen');
    }
}
const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_Error_Message' });
};

const signout = dispatch => async (callback) => 
{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'})
    callback();
};

export const { Provider, Context } = createDataContext(
    AuthReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
)