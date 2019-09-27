import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    start(){
        this.setState({
            date: new Date()
        })
    }
    componentDidMount(){
        setInterval( () => {
            this.start()
        })
    }
    render(){
        return <h1>Time : {this.state.date.toLocaleTimeString()}</h1>
    }
}