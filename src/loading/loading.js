import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { CircularProgress } from '@material-ui/core';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div id="loading">
            <CircularProgress color='inherit' size={20} />
            {this.props.text !== '' ? <h1>{this.props.text}</h1> : false}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading,
        text: state.loadingReducer.text,
    }
}

export default connect(mapStateToProps, null)(Loading);