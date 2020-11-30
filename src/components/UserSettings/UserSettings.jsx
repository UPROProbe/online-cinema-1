import React from 'react';
import style from "./UserSettings.module.css"

const UserSettings = (props) => {
    return (
        <div className={style.settings}>
            <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">First Name</label>
                <input type="text" className="form-control name" id="recipient-name" />
                <button type="button" className="btn save">Save</button>
            </div>
            <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Last Name</label>
                <input type="text" className="form-control name" id="recipient-name" />
                <button type="button" className="btn save">Save</button>
            </div>
            <br />
            <button type="button" className="btn remove">Account Deletion Request</button>
        </div>
    )
}
export default UserSettings;