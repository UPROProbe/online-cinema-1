import React from 'react';
import style from "./User.css"
const User = (props) => {
    return (
        props.users.map(user =>
            <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.remove}</td>
                <td><button type="button" className="btn remove" onClick={() => { props.deleteUser(user.id) }}>Remove user</button></td>
            </tr>
        )
    )
}
export default User;