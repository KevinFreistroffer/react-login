import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserValuesAction, setLoadingValuesAction } from '../redux/actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div id="dashboard">
            <header>
                <p>Signed in as <span>{this.props.username}</span></p>
            </header>
            This component only shows if logged in. Logged in is only true if redux returns a user.

            Dashboard
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
        password: state.userReducer.password,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUserValues: (username, password) => dispatch(setUserValuesAction(username, password)),
        setLoadingValuesAction: (isOpen, text) => dispatch(setLoadingValuesAction(isOpen, text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);