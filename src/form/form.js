import React, { Component } from 'react';
import './styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameError: 'fdaf',
            password: '',
            passwordERror: '',
        }
    }

    onChange = (event) => {
        console.log('onChange', event.target.value);

        this.props.onChange(this.state.username, this.state.password);
    }

    validate = () => {
        let usernameError = '';
        let passwordError = '';

        // if (false) {
        //     usernameError = Constants.ERROR_USERNAME_REQUIRED;
        // }

        // if (false) {
        //     passwordError = Constants.ERROR_PASSWORD_REQUIRED;
        // }

        this.setState({
            usernameError,
            passwordError,
        });

    }

    submit = () => {
        console.log('form submitted');

        // validate
        // if usernameError and passwordError are empty strings
        // send to the server
    }

    render() {
        return (<form>
            <label for="username"> Username
                <input type="text" id="username" placeholder="Username" onChange={this.onChange} />
            </label>
            {this.state.usernameError != '' ? <div className="error">{this.state.usernameError}</div> : false}
            <label for="username"> Password
                <input type="password" id="password" placeholder="Password" onChange={this.onChange} />
            </label>
            {this.state.passwordError != '' ? <div className="error">{this.state.passwordError}</div> : false}

            <button type="submit" onClick={this.submit}>Login</button>
        </form>);
    }
}

export default Form;


// const mapStateToProps = (state) => {
//     return {
//       probably just a loading state value such as 'isLoading' and 'loadingText'
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       probably just a loading action such as setLoadingValues(isLoading, loadingText) => dispatch(SetLoadingValues(isLoading, LoadingText))
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form)