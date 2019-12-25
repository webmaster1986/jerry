import { combineReducers } from 'redux';
import formReducer from './formReducer'
import profileReducer from './profileReducer'

const reducer = combineReducers({
    form: formReducer,
    profile: profileReducer
});

export default reducer
