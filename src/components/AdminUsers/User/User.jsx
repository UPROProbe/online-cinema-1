import React from 'react';
import style from "./User.css"
const User = (props) => {
    return (
        <tr>
            <td>{props.firstN}</td>
            <td>{props.lastN}</td>
            <td>{props.eMail}</td>
            <td>{props.remove}</td>
            <td><button type="button" className="btn remove">Remove user</button></td>
        </tr>
    )
}
export default User;