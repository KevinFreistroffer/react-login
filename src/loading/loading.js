import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { CircularProgress } from '@material-ui/core';
import { setLoadingValuesAction } from '../redux/actions';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div id="loading">
            <CircularProgress color='inherit' size={20} />
            {this.props.text !== '' ? <h1>{this.props.text}</h1> : false}
            <p onClick={() => {
                this.props.setLoadingValuesAction(false);
            }}>Dismiss this loading screen</p>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading,
        text: state.loadingReducer.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingValuesAction: (loading, text) => dispatch(setLoadingValuesAction(loading, text)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Loading);