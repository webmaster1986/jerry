import { SET_FORM_VALUE, } from '../constent';

export const setFormValue = (objValues) => ({
    type: SET_FORM_VALUE,
    payload: objValues
});
