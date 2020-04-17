import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from "react-router-dom";

//header
import { HeaderInfo } from "../../header/jsx/Header.jsx";
//content
import { Main } from "./Main.jsx";
import { Works } from "./Works.jsx";
import { Theme } from "../../header/jsx/Theme.jsx";

export default class App extends React.Component {
    state = {
        title: "",
    };

    getTitle = (link) => {
        let getTitle = "";
        switch (link) {
            case "/works":
                getTitle = "мои работы";
                break;
            default:
                getTitle = "основная информация";
                break;
        }

        this.setState({
            title: getTitle,
        });
    };
    render() {
        return (
            <Router>
                <header className="header">
                    <div className="header__title">{this.state.title}</div>
                    <div className="header__inner">
                        <nav className="header__item menu">
                            <ul className="menu__list">
                                {this.props.menu.map((item, index) => (
                                    <li key={index} className="menu__item">
                                        <NavLink
                                            exact={index === 0 ? true : false}
                                            to={`/${item.link}`}
                                            activeClassName="menu__link--active"
                                            className="menu__link"
                                        >
                                            <svg className="menu__icon">
                                                <use xlinkHref={`#${item.id}`}></use>
                                            </svg>
                                        </NavLink>
                                        <div className="menu__title">{item.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <HeaderInfo />

                        <Theme />
                    </div>
                </header>

                <div className="board">
                    <div className="board__inner">
                        <Switch>
                            <Route exact path="/" children={<Main getTitle={this.getTitle} />} />
                            <Route exact path="/works" children={<Works getTitle={this.getTitle} />} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

App.defaultProps = {
    menu: [
        {
            name: "основная информация",
            id: "mission",
            link: "",
        },
        {
            name: "работы",
            id: "level",
            link: "works",
        },
    ],
};
