import React, {ReactNode} from "react";

export default class Tab extends React.Component<{
    id: string,
    children: ReactNode,
}> {
    render(): ReactNode {
        return (
            <div id={this.props.id} className="col s12">
                {this.props.children}
            </div>
        );
    }
}
