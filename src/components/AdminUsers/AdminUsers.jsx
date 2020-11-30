import React from 'react';
import "./AdminUsers.css"
import User from './User/User';
import UserContainer from './User/UserContainer';

const AdminUsers = (props) => {
    // debugger
//     let userElements = props.users.map(user =>
// <User firstN={user.firstName} lastN={user.lastName} email={user.email} remove={user.remove} /> );

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Remove request</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <UserContainer />
                {/* {userElements} */}
            </tbody>
        </table>
    )
}
export default AdminUsers;