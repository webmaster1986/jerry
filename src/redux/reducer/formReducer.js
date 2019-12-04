import { SET_FORM_VALUE, } from '../constent';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    apt: '',
    city: '',
    state: '',
    zipCode: '',
    day: '',
    year: '',
    last4SSN: '',
    annualIncome: '',
    monthlyHousingCost: '',
    count: 1,
    isBankConnected: false,
    selectedPlan: 3
}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FORM_VALUE: {
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
