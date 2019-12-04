import { combineReducers } from 'redux';
import formReducer from './formReducer'

const reducer = combineReducers({
    form: formReducer
});

export default reducer
