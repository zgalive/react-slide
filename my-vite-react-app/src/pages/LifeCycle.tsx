import { Component, ReactNode } from "react"

export class LifeCycle extends Component{
    constructor(props){
        super(props)
        console.log('constructor')
    }

    UNSAFE_componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentDidUpdate(){
        console.log('did update')
    }

    componentWillUnmount(){
        console.log('unmount')
    }

    render(): ReactNode {
        return <>
        <div>hello world</div>
        </>
    }
}