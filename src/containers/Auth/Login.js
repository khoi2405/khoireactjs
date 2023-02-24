import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl'; 


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            showpassword : false
        }
    }

    handleOneChangeInput = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    handleOneChangePassword = (event) => {
        this.setState({
            password : event.target.value
        })
    }
    handleOnelogin = () =>{
        console.log('username: ' , this.state.username , 'password: ',this.state.password)
        console.log('all : ' ,this.state)
    }
    handleShowpassword = () =>{
        this.setState({
            showpassword : !this.state.showpassword 
        })
        }

    render() {
        

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-center row ">
                        <div className="col-12  text-login">Login</div>
                        <div className="col-12  form-grop login-input" >
                            <label>User Name :</label>
                            <input type="text" className="form-control" placeholder='Enter your user name'
                            value={this.state.username}
                            onChange={(event) => this.handleOneChangeInput(event)} />
                        </div>

                        
                        <div className="col-12  form-grop login-input">
                            <label>Password :</label>
                            <div className='custom-input'>
                            <input className="form-control" type={this.state.showpassword ? 'text' : 'password'}  placeholder='Enter your password'
                            value={this.state.password}
                            onChange={(event) => this.handleOneChangePassword(event)} />
                            <span
                                onClick={() => {this.handleShowpassword()}}


                            >


                                
                            <i class={this.state.showpassword ? 'far fa-eye' : 'far fa-eye-slash '}></i>

                            </span>
                            </div>
                            
                        </div>
                        <div className='col-12'>

                        <button class="btn-login" onClick={()=>{this.handleOnelogin()}}>Login</button>

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
