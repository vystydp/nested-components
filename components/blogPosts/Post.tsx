import * as React from "react";

type TProps = {
    title: string;
    isLast: boolean;
    children: React.ReactNode;
}

export default class Post extends React.Component<TProps> {
    render() {
        return (
            <React.Fragment>
                <div className="post">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
                {!this.props.isLast ? <hr/> : ""}
            </React.Fragment>
        )
    }
}
