import firebaseDb from "../firebase"
const DELETE_USER = 'DELETE_USER'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: '1', firstName: 'Ruairidh', lastName: 'Fisher', email: 'ruairidh.fisher@gmail.com', isRemoveRequested: true },
        { id: '2', firstName: 'Ruairidafwfh', lastName: 'Fishesseer', email: 'ruairidh.firwsher@gmail.com', isRemoveRequested: true },
        { id: '3', firstName: 'Siebwfcraj', lastName: 'Pugfseh', email: 'sirfewaj.pugrwh@gmail.com', isRemoveRequested: true },
        { id: '4', firstName: 'Siraewcfej', lastName: 'Puwqegh', email: 'sifewraj.purewgh@gmail.com', isRemoveRequested: false },
        { id: '5', firstName: 'Siraj', lastName: 'Pugh', email: 'siraj.pugh@gmail.com', isRemoveRequested: false },
        { id: '6', firstName: 'Ruairidh', lastName: 'Fisher', email: 'ruairidh.fisher@gmail.com', isRemoveRequested: false },
        { id: '7', firstName: 'Ruairidafwfh', lastName: 'Fishesseer', email: 'ruairidh.firwsher@gmail.com', isRemoveRequested: false },
        { id: '8', firstName: 'Siebwfcraj', lastName: 'Pugfseh', email: 'sirfewaj.pugrwh@gmail.com', isRemoveRequested: false },
        { id: '9', firstName: 'Siraewcfej', lastName: 'Puwqegh', email: 'sifewraj.purewgh@gmail.com', isRemoveRequested: false },
        { id: '10', firstName: 'Siraj', lastName: 'Pugh', email: 'siraj.pugh@gmail.com', isRemoveRequested: false },
        { id: '11', firstName: 'Ruairidh', lastName: 'Fisher', email: 'ruairidh.fisher@gmail.com', isRemoveRequested: false },
        { id: '12', firstName: 'Ruairidafwfh', lastName: 'Fishesseer', email: 'ruairidh.firwsher@gmail.com', isRemoveRequested: false },
        { id: '13', firstName: 'Siebwfcraj', lastName: 'Pugfseh', email: 'sirfewaj.pugrwh@gmail.com', isRemoveRequested: false },
        { id: '14', firstName: 'Siraewcfej', lastName: 'Puwqegh', email: 'sifewraj.purewgh@gmail.com', isRemoveRequested: false },
        { id: '15', firstName: 'Siraj', lastName: 'Pugh', email: 'siraj.pugh@gmail.com', isRemoveRequested: false },
        { id: '16', firstName: '', lastName: '', email: '', isRemoveRequested: '' },
    ],
    // users:[],
    // pageSize: 10,
    // totalUsersCount:25,
    // currentPage: 1,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER: {
            let removeByAttr = function (arr, attr, value) {
                let i = arr.length;
                while (i--) {
                    if (arr[i]
                        && arr[i].hasOwnProperty(attr)
                        && (arguments.length > 2 && arr[i][attr] === value)) {
                        arr.splice(i, 1);
                    }
                }
                return arr;
            }
            removeByAttr(state.users, 'id', action.userId);

            return {
                ...state,
                users: [...state.users],
            };

        }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}
// for (let i=0; i < state.users.length; i++) { 
//     firebaseDb.child('users').push(
//         state.users[i],
//         err => {
//             if (err)
//                 console.log(err)
//         })
// }
export default userReducer;
export const deleteUser = id => ({ type: DELETE_USER, userId: id })
export const setUsers = users => ({ type: SET_USERS, users })
