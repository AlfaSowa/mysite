import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//header
import { HeaderInfo } from '../../header/jsx/Header.jsx';
//content
import { Main } from './Main.jsx';
import { Works } from './Works.jsx';
import { Theme } from '../../header/jsx/Theme.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <header className='header'>
                    <div className='header__inner'>
                        <nav className='header__item menu'>
                            <ul className='menu__list'>
                                {this.props.menu.map((item, index) => (
                                    <li key={index} className='menu__item'>
                                        <Link to={`/${item.link}`} className='menu__link'>
                                            <svg className='menu__icon'>
                                                <use xlinkHref={`#${item.id}`}></use>
                                            </svg>
                                        </Link>
                                        <div className='menu__title'>{item.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <HeaderInfo />

                        <Theme />
                    </div>
                </header>

                <Switch>
                    <Route path='/works'>
                        <Works />
                    </Route>

                    <Route path='/'>
                        <Main />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

App.defaultProps = {
    menu: [
        {
            name: 'основная информация',
            id: 'mission',
            link: ''
        },
        {
            name: 'работы',
            id: 'level',
            link: 'works'
        }
    ]
};
