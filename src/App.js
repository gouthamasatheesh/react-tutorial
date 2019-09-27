import React, { Component } from 'react'
import Clock from './Clock'
import Inc from './Inc'
import Message from './Message'
import List from './List'
import Formtest from './Formtest'
import Converter from './Converter'

export default class App extends Component {
    render() {
        return (
            <div>
                <Clock />
                <Inc />
                <Message />
                <List />
                <Formtest />
                <Converter />
            </div>
        )
    }
}
