import React from 'react'
import style from "./Header.module.css"
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import './Modal/Modal.css'

// const Modal = (props) => {
//     return (
//         <div className="modal fade" id={props.target} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//             aria-hidden="true">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                 {props.children}

//                     {/* <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>

//                     <div className="modal-body">
//                         <form>
//                             <div className="form-group">
//                                 <label for="recipient-name" className="col-form-label">E-mail</label>
//                                 <input type="text" className="form-control" id="recipient-name" />
//                             </div>
//                             <div className="form-group">
//                                 <label for="recipient-name" className="col-form-label">Password</label>
//                                 <input type="text" className="form-control" id="recipient-name" />
//                             </div>
//                         </form>
//                     </div>

//                     <div className="modal-footer">
//                         <button type="button" className="btn ftr">Sign Up</button>
//                     </div> */}


//                 </div>
//             </div>
//         </div>
//     )
// }
const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <Logo />
                <Menu />

                {/* <Modal tagret='signUp'>
                <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="recipient-name" className="col-form-label">E-mail</label>
                                <input type="text" className="form-control" id="recipient-name" />
                            </div>
                            <div className="form-group">
                                <label for="recipient-name" className="col-form-label">Password</label>
                                <input type="text" className="form-control" id="recipient-name" />
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn ftr">Sign Up</button>
                    </div>
                </Modal> */}
                <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">E-mail</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Password</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn ftr">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="signIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                                        <label for="recipient-name" className="col-form-label">E-mail</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Password</label>
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
        </header>
    )
}
export default Header;