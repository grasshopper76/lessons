import React, { Component } from 'react'

export default class A extends Component {
    click = () => {
        alert(this.props.name);
    };

    render() {
        return (
            <a className="container" href="javascript:void(0);" onClick={this.click}>{this.props.name}</a>
        );
    }
}