import React, {ReactNode} from "react";
import Card from "./Card";
import Icon from "./Icon";

export default class App extends React.Component<any, any> {
    componentDidMount() {
        M.AutoInit();
    }

    render(): ReactNode {
        const cards = [];
        for (let i = 0; i < 100; i++) {
            cards.push(
                <Card key={i}
                      title={i + ") I am a very simple card. I am good at containing small bits of information." +
                          " I am convenient because I require little markup to use effectively."}/>
            );
        }

        return (
            <React.Fragment>
                <header>
                    <nav>
                        <div className="container">
                            <div className="nav-wrapper">
                                <a href="#" className="brand-logo">Logo</a>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="sass.html">Sass</a></li>
                                    <li><a href="badges.html">Components</a></li>
                                    <li><a href="collapsible.html">JavaScript</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container">
                    <div className="row" style={{marginTop: 20}}>
                        <div id="test1" className="col s12">
                            {cards}
                        </div>

                        <div id="test2" className="col s12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div id="test3" className="col s12">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://materializecss.com/images/office.jpg"/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                                        className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I
                                        am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>

                        <div id="test4" className="col s12">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="http://materializecss.com/images/sample-1.jpg"/>
                                </div>
                                <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Card Title<i
                                            className="material-icons right">more_vert</i></span>
                                    <p><a href="#">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Card Title<i
                                            className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once
                                        clicked on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="page-footer sticky-footer">
                    <div className="row footer-row">
                        <div className="col s12 footer-col">
                            <ul className="tabs tabs-fixed-width transparent white-text">
                                <li className="tab col s3 white-text"><a href="#test1" className="active white-text">
                                    <Icon variant={"account_circle"}/>
                                </a></li>
                                <li className="tab col s3"><a href="#test2" className="white-text">
                                    <Icon variant={"chat_bubble"}/>
                                </a></li>
                                <li className="tab col s3"><a href="#test3" className="white-text">
                                    <Icon variant={"explore"}/>
                                </a></li>
                                <li className="tab col s3"><a href="#test4" className="white-text">
                                    <Icon variant={"account_circle"}/>
                                </a></li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </React.Fragment>
        );
    }
}
