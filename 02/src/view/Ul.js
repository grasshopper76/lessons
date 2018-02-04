import React, { Component } from 'react'
import Li from './Li'

export default class Ul extends Component {
    render() {
        return (
            <ul className="container">
                <Li name="Линейный программист" />
                <Li name="Rock star (Software Scientist)" />
                <Li name="Делец (Software Engineer)" />
                <Li name="Пассажир (business bullshitter)" />
            </ul>
        );
    }
}