import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl'; 


class Login extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-center row ">
                        <div className="col-12  text-login">Login</div>
                        <div className="col-12  form-grop login-input" >
                            <label>User Name :</label>
                            <input type="text" className="form-control" placeholder='Enter your user name'/>
                        </div>

                        
                        <div className="col-12  form-grop login-input">
                            <label>Password :</label>
                            <input type="password" className="form-control" placeholder='Enter your password'/>
                        </div>
                        <div className='col-12'>

                        <button class="btn-login">Login</button>

                        </div>

                        <div className="col-12">
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center">
                            <span className='text-other-login'>Or Login with:</span>
                        </div>
                        <div className='col-12 Logo-login'>
                        <i className="fab fa-google google" ></i>
                        <i className="fab fa-facebook facebook"></i>
                        </div>

                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);