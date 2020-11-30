import React from 'react';
import './Modal.css'
const SignIn = (props) => {
    return (
        <div>
            <button type="button" className="btn in" data-toggle="modal" data-target="#signIn">Sing
                    In</button>
            <div className="modal fade" id="signIn" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">E-mail</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Password</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn ftr">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;