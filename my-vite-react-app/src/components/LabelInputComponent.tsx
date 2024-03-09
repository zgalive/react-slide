import { Component, ReactNode } from "react";

export class LabelInputComponent extends Component {
    state = {
        value: ''
    }
    constructor(props){
        super(props);
    }

    onInputChange(newVlaue: string){
        this.setState({
            value: newVlaue,
        })
    }

    componentDidUpdate(){
        console.log('did update')
    }

    render(): ReactNode {
        return <div>
            <span>{this.props.label}</span>&nbsp;
            <input value={this.state.value} onChange={e=>this.onInputChange(e.target.value)}/>
        </div>
    }
}