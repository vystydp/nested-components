import React from "react";

type TProps = {
    children: React.ReactNode
}

export default class P extends React.Component<TProps> {
    render() {
        return (<p>{this.props.children}</p>)
    }
}

