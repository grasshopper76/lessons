import React, { Component } from 'react'

export default class Button extends Component {
    click = () => {
        alert(this.props.msg);
    };

    render() {
        return (
            <button className="container" onClick={this.click}>{this.props.caption}</button>
        );
    }
}