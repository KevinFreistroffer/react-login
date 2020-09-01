import React, { Component } from 'react';
import './styles.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<form>
            <label for="username"> Username
                <input type="text" id="username" placeholder="Username" />
            </label>
        </form>);
    }
}

export default Form;