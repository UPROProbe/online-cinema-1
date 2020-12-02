import React from 'react';
import style from "./User.module.css"
const User = (props) => {
    
    return (
        props.users.map(user =>
            <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                {user.isRemoveRequested===true?<td>+</td>:<td></td>}
                {user.isRemoveRequested===true?<td><button type="button" className="btn remove" onClick={() => { props.deleteUser(user.id) }}>Remove user</button></td>:<td></td>}
            </tr>
        )
    )
}
export default User;