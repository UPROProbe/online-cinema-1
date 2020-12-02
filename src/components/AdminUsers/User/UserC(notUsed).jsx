import React from 'react';
import style from "./User.module.css"
import firebaseDb from "../../../firebase"
class UserC extends React.Component {

    componentDidMount() {
        firebaseDb.child('users').on('value', snapshot => {
            if (snapshot.val() != null)
                this.props.setUsers(Object.values(snapshot.val()))
        })
    }

    render() {

        let pagesCount=this.totalUsersCount/this.pageSize

        let pages=[]
        for(let i=1; i<=pagesCount; i++){
            pages.push(i)
        }

        return (
            this.props.users.map(user =>
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.remove}</td>
                    <td><button type="button" className="btn remove" onClick={() => { this.props.deleteUser(user.id) }}>Remove user</button></td>
                </tr>
            )
        )
    }

}
export default UserC;