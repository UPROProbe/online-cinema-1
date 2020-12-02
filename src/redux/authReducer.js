import firebaseDb from "../firebase"
const SET_USER_DATA = 'ADD-SET_USER_DATA'


let initialState = {
    userId: null, 
    email: null, 
    password: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default:
            return state;
    }
}
export default authReducer;
export const setAuthUserData = (userId, email, password) => ({ type: SET_USER_DATA, data: { userId, email, password } })
