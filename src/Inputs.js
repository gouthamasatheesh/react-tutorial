import React, { Component } from 'react'

export default class Inputs extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>{this.props.scalename}</legend>
                    <input 
                        type="text" 
                        value={this.props.value}
                        onChange={this.props.func}
                    />
                </fieldset>
            </div>
        )
    }
}
