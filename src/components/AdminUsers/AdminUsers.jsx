import React from 'react';
import "./AdminUsers.css"
import User from './User/User';

const AdminUsers = (props) => {

    let userElements = props.users.map(user =>
        <User firstN={user.firstN} lastN={user.lastN} eMail={user.eMail} remove={user.remove} /> );

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
                {userElements}
            </tbody>
        </table>
    )
}
export default AdminUsers;