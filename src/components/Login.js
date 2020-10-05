import React, { Component } from 'react'

export class Login extends Component {
    constructor() {
        super()

        this.state = {
            isLogin: true
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState(prevState => {
            return {
                isLogin: !prevState.isLogin
            }
        });
    }

    render() {
        return (
            <button onClick={this.onButtonClick}>
                {this.state.isLogin ? 'Login' : 'Logout'}
            </button>
        )
    }
}

export default Login
