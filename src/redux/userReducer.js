const DELETE_USER = 'DELETE_USER'

let initialState = {
    users: [
        { id: '1', firstName: 'Ruairidh', lastName: 'Fisher', email: 'ruairidh.fisher@gmail.com', remove: '+' },
        { id: '2', firstName: 'Ruairidafwfh', lastName: 'Fishesseer', email: 'ruairidh.firwsher@gmail.com', remove: '+' },
        { id: '3', firstName: 'Siebwfcraj', lastName: 'Pugfseh', email: 'sirfewaj.pugrwh@gmail.com', remove: '-' },
        { id: '4', firstName: 'Siraewcfej', lastName: 'Puwqegh', email: 'sifewraj.purewgh@gmail.com', remove: '-' },
        { id: '5', firstName: 'Siraj', lastName: 'Pugh', email: 'siraj.pugh@gmail.com', remove: '-' },
        { id: '6', firstName: '', lastName: '', email: '', remove: '' },
    ],
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

        default:
            return state;
    }
}
export default userReducer;
export const deleteUserAC = id => ({ type: DELETE_USER, userId: id })
