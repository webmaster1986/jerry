import { SET_PROFILE_VALUE, } from '../constent';

export const setProfileValue = (objValues) => {
    return{
        type: SET_PROFILE_VALUE,
        payload: objValues
    }

};
