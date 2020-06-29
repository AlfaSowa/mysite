import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//info in sidebar
import { Avatar } from "../../sidebar/jsx/Avatar.jsx";
import { Info } from "../../sidebar/jsx/Info.jsx";
import { Links } from "../../sidebar/jsx/Links.jsx";
//main content
import Skills from "../../skills/jsx/Skills.jsx";
import Blocks from "../../blocks/jsx/Blocks.jsx";
import Stats from "../../stats/jsx/Stats.jsx";

export class Main extends React.Component {
    getContent = (module) => {
        switch (module) {
            case "skills":
                return <Skills />;
            case "works":
                return <Blocks />;
            case "stats":
                return <Stats />;
        }
    };

    render() {
        return (
            <React.Fragment>
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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

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
