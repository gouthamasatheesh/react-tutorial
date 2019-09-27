import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const cartoons = ['Pikachu', 'Aladdin', 'Tom', 'Jerry']
        return (
            <div>
                <TooonList cartoons={cartoons} />
            </div>
        )
    }
}

const TooonList = (props) => {
    const lists = props.cartoons
    return(
        <ul>
            {lists.map((list,index) => <li key={index}>{list}</li>)}
        </ul>
    )
}
