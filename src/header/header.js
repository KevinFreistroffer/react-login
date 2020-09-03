import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { setLoadingValues } from '../redux/actions'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<header>
            <h1>React Login Form</h1>
        </header>);
    }
}


const mapStateToProps = (state) => {
    console.log('mapStateToProps state', state);
    return {
        loading: state.loadingReducer.loading,
        text: state.loadingReducer.text,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingValues: (loading = false, text = '') => dispatch(setLoadingValues(loading, text)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);