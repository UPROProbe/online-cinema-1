import React from 'react';
import "./AdminUsers.module.css"
import User from './User/User';
import UserContainer from './User/UserContainer';

const AdminUsers = (props) => {
    
    

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
            </tbody>
        </table>
    )
}
export default AdminUsers;