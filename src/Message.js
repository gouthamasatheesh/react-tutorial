import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: true
        }
    }

    changeMessage = () => {
        this.setState({
            value: !this.state.value
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.changeMessage}>Change the Message</button>
                <Msg value={this.state.value}/>
            </div>
        )
    }
}

const Msg = (props) => {
    if(props.value){
        return <h1>This is first message</h1>
    }
    return <h1>This is second message</h1>
}