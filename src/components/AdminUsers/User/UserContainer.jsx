import React from 'react';
import { connect } from 'react-redux';
import { deleteUserAC} from '../../../redux/userReducer';
import User from './User';

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {  
        deleteUser: (userId) => {
            dispatch(deleteUserAC(userId));
        },
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;