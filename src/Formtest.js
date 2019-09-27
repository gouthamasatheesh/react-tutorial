import React, { Component } from 'react'

export default class Formtest extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'alladin'
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.value)
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" onChange={this.handleChange}/> */}
                    {/* <label>Check</label>
                    <input type="checkbox" onChange={this.handleChange}/> */}

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="pikachu">Pikachu</option>
                        <option value="alladin">Alladin</option>
                        <option value="tom">Tom</option>
                    </select>
                    <input type="submit" value="GO AHEAD"/>
                </form>
            </div>
        )
    }
}
