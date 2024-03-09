import { Component, PureComponent, ReactNode } from "react"
import { LabelInputComponent } from "../components/LabelInputComponent"

export class Basic extends PureComponent{
    state = {
        label: 'name'
    }

    render(): ReactNode {
        return <LabelInputComponent label={this.state.label}/>;
    }
}
