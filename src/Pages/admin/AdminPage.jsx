import React from 'react';
import Cookies from 'js-cookie';
import {Link} from "react-router-dom";
import './Admin.scss';
import axios from 'axios';
import {getApiUrl, getApiUrlWithParam} from "../../AppUtil";

export class AdminPageComponent extends React.Component{
    constructor(props) {
        super(props);

        this.loginToken = Cookies.get('loginToken');
        this.state = {
            isLogin: !!this.loginToken,
            username: '',
            password: ''
        };

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderAdminOption() {
        return (
            <div>
                <Link to="/admin/project" className="linkItem">
                    Manage Project
                </Link>
                <Link to="/admin/staff" className="linkItem">
                    Manage Staff
                </Link>
            </div>
        );
    }

    login(username, password) {
        console.log(getApiUrl('login'));
        console.log(getApiUrlWithParam('login',{username: username, password: password}));
        console.log('axios', axios);
        axios.post(
            getApiUrl('login'),
            {
                username: username,
                password: password
            }
        )
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
        })
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.login(this.state.username, this.state.password);
    }

    renderLoginPage() {
        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <div>Admin Login</div>
                <label htmlFor="">
                    username:
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} name="username"/>
                </label>
                <label htmlFor="">
                    password:
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} name="password"/>
                </label>
                <input type="submit" value="Login" />
            </form>
        );
    }

    render() {

        return (
            <div>
                { this.state.isLogin && this.renderAdminOption() }
                { !this.state.isLogin && this.renderLoginPage() }
            </div>

        );

    }


}

export default AdminPageComponent;