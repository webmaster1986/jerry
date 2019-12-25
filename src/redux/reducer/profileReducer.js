import { SET_PROFILE_VALUE, } from '../constent';

const initialState = {
    bankAccountList: [],
    debitCardList: [],
    errors: {},
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE_VALUE: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state
        }
    }
}
