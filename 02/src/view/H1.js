import React, { Component } from 'react'

export default class H1 extends Component {
    render() {
        return (
            <h1 className="container">Урок {this.props.lessonNumber}. Часть {this.props.partNumber}.</h1>
        );
    }
}