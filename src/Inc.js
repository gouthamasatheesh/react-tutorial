import React, { Component } from 'react'

export default class Inc extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
        
    }
    increment = (e) => {
        e.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <a href="https://www.google.co.in/" onClick={this.increment}>Value is {this.state.counter}</a>
        )
    }
}
