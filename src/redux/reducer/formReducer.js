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
    month: '',
    day: '',
    year: '',
    last4SSN: '',
    annualIncome: '',
    monthlyHousingCost: '',
    count: 1,
    isBankConnected: false,
    selectedPlan: 3,
    errors: {},
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
