import React, { Component } from 'react'

export class TextInput extends Component {
    state = {
        text: ''
    }

    onChangeHandler = e => {
        this.setState({text: e.target.value})
    }

    handleClick = e => {
        let inputValue = this.state.text + e.target.value;
        this.setState({text: inputValue})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onChangeHandler}
                placeholder='Введите значение' />
                <table>
                    <tbody>
                    <tr>
                        <td><button onClick={this.handleClick} value="1">1</button></td>
                        <td><button onClick={this.handleClick} value="2">2</button></td>
                        <td><button onClick={this.handleClick} value="3">3</button></td>
                        <td><button onClick={this.handleClick} value="4">4</button></td>
                        <td><button onClick={this.handleClick} value="5">5</button></td>
                        <td><button onClick={this.handleClick} value="6">6</button></td>
                        <td><button onClick={this.handleClick} value="7">7</button></td>
                        <td><button onClick={this.handleClick} value="8">8</button></td>
                        <td><button onClick={this.handleClick} value="9">9</button></td>
                        <td><button onClick={this.handleClick} value="0">0</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    );
    }
}