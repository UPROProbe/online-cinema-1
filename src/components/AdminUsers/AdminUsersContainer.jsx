import React from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../../redux/userReducer';
import firebaseDb from '../../firebase'
import AdminUsers from './AdminUsers';

class AdminUsersContainer extends React.Component {
    componentDidMount() {
        firebaseDb.child('users').on('value', snapshot => {
            if (snapshot.val() != null)
                this.props.setUsers(Object.values(snapshot.val()))
        })
    }

    render() {     
        return <AdminUsers />
    }
}

let mapStateToProps = (state) => {
    return {
        // users: state.users.users,
        // pageSize: state.users.pageSize,
        // totalUsersCount: state.users.totalUsersCount,
        // currentPage: state.users.currentPage,
    }
}

export default connect(mapStateToProps, {setUsers})(AdminUsersContainer);