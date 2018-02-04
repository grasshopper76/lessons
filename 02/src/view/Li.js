import React, { Component } from 'react'
import A from './A'

export default class Li extends Component {
    render() {
        return (
            <li className="container"><A href={this.props.href} name={this.props.name}/></li>
        );
    }
}