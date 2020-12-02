import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../../redux/userReducer';
import User from './User';
// import User from './UserC';

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        // pageSize: state.pageSize,
        // totalUsersCount: state.totalUsersCount
    }
}


const UserContainer = connect(mapStateToProps, {deleteUser})(User);

export default UserContainer;