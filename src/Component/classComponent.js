import React, { Component } from 'react'

export class ClassComponent extends Component {

    constructor(props) {
        console.log(constructor)
        super(props)
        this.state = {
             
        }
    }
componentDidMount=()=> {
    var a=10;
    a++;
    console.log(a)
}
    render() {
        console.log(constructor)

        return (
            <div>
                
            </div>
        )
    }
}

export default ClassComponent
