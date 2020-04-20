import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//info in sidebar
import { Avatar } from "../../sidebar/jsx/Avatar.jsx";
import { Info } from "../../sidebar/jsx/Info.jsx";
import { Links } from "../../sidebar/jsx/Links.jsx";
//main content
import Skills from "../../skills/jsx/Skills.jsx";
import Works from "../../works/jsx/Works.jsx";
import Stats from "../../stats/jsx/Stats.jsx";

export class Main extends React.Component {
    state = {
        workDetails: false,
    };

    workDetails = (details) => {
        this.setState({
            workDetails: details,
        });
    };

    getContent = (module) => {
        switch (module) {
            case "skills":
                return <Skills />;
            case "works":
                return <Works workDetails={this.workDetails} />;
            case "stats":
                return <Stats />;
        }
    };

    componentDidMount = () => {
        let link = /\/\w*$/gi.exec(location.href);
        this.props.getTitle(link[0]);
    };
    render() {
        return (
            <React.Fragment>
                {/* <div className="board__title">Основная информация</div> */}

                <div className="board__content">
                    <div className="board__sidebar">
                        <Avatar />
                        <Info />
                        <Links />
                    </div>

                    <div className="board__box">
                        <div className="main">
                            {this.props.modules.map((item, index) => (
                                <div key={index} className={`board__item ${item.class}`}>
                                    <h2 className="board__item-title">{item.name}</h2>
                                    <div className="board__item-content">{this.getContent(item.class)}</div>
                                </div>
                            ))}
                        </div>

                        <Details details={this.state.workDetails} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const Details = (props) => {
    const { details } = props;

    return (
        <div className="details">
            <div className="details__header">
                <div className="details__title">
                    <span>{details.title ? details.title : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}</span>
                </div>

                <div className="details__link">
                    <a href="#">подробнее</a>
                </div>
            </div>

            <div className="details__inner">
                <div className="details__content">
                    {details.content ? details.content.map((item, index) => <p key={index}>{item.paragraph}</p>) : null}
                </div>
            </div>
        </div>
    );
};

Main.defaultProps = {
    modules: [
        {
            name: "навыки",
            class: "skills",
        },
        {
            name: "выполненые заказы",
            class: "works",
        },
        {
            name: "статистика",
            class: "stats",
        },
    ],
};

{
    /* <div className="details__link">
                    <a className="details__link-txt" href={`/works/${details.id}`}>
                        подробнее
                    </a>
                </div> */
}
