import React from 'react';
import { connect } from 'react-redux';
import AdminUsers from './AdminUsers';

let mapStateToProps = (state) => {
    return {
        // users: state.users.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const AdminUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AdminUsers);

export default AdminUsersContainer;