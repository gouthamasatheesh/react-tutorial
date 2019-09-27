import React, { Component } from 'react'
import Inputs from './Inputs'

export default class Converter extends Component {
    constructor(props){
        super(props)
        this.state = {
            scale: 'c',
            temp: 0
        }
    }
    handleCelsius = (e) => {
        this.setState({
            scale: 'c',
            temp: e.target.value
        })
    }
    handleFahrenheit = (e) => {
        this.setState({
            scale: 'f',
            temp: e.target.value
        })
    }
    render() {
        const temp = this.state.temp
        const scale = this.state.scale
        const celsius = scale === 'f' ? convert(temp, toCelsius) : temp 
        const fahrenheit = scale === 'c' ? convert(temp, toFahrenheit) : temp
        return (
            <div>
                <Inputs 
                    scalename="Celsius"
                    value={celsius}
                    func={this.handleCelsius}
                />

                <Inputs 
                    scalename="Fahrenheit"
                    value={fahrenheit}
                    func={this.handleFahrenheit}
                />
            </div>
        )
    }
}

const  convert = (temp, convertFunction) => {
    return convertFunction(temp)
}

const  toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9
}

const  toFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32
}
