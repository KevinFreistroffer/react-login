import React, { Component } from 'react';
import './styles.scss';
import { routes } from '../routes';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    outputRoutes() {
        let elements = [];
        routes.map((route, index) => {
            return elements.push(<li href={route.url}>{route.displayName}</li>)
        });

        return elements;
    }
    render() {
        return (<footer>
            <h2>Footer</h2>
        </footer>);
    }
}

export default Footer;