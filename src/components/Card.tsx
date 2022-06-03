import React, {ReactNode} from "react";
import testImage from "../../assets/test-photo.jpeg?resource";
import Icon from "./Icon";

export default class Card extends React.Component<{
    title: string,
}> {
    render(): ReactNode {
        return (
            <div className="card">
                <div className="card-image">
                    <img alt={"test image"} src={testImage}/>
                    <span className="card-title">Card Title</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon variant={"add"} />
                    </a>
                </div>
                <div className="card-content">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }
}
