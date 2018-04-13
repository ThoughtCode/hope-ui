import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_CLIENT_START:
            return {
                ...state
            };
        case actionTypes.REGISTER_CLIENT_SUCCESS:
            const newUser = {
                ...action.formData,
                id: action.clientId
            };
            return {
                ...state,
                users: state.users.concat(newUser)
            };
        case actionTypes.REGISTER_CLIENT_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default reducer;