import React, {Component} from 'react'

import Div from './view/Div'
import H1 from './view/H1'
import H3 from './view/H3'
import Ul from './view/Ul'
import Button from './view/Button'

export default class App extends Component {
    render() {
        return (
            <Div>
                <H1 lessonNumber="1" partNumber="2" />
                <H3 />
                <Ul />
                <Button msg="Нажали кнопку!" caption="Нажми на кнопку"/>
            </Div>
        );
    }
}