import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from '../main/Home.jsx'
import Menu from '../main/Menu.jsx'
import Order from '../main/Order.jsx'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="header">
                        <div className='logo'>sowa-restoran</div>
                        <nav className='menu'>
                            <ul className='menu__list'>
                                <li className='menu__item'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to="/order/">Order</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className='main'>
                        <Route path="/" exact component={OrderRoute} />
                        <Route path="/order/" component={HomeRoute} />
                    </div>

                </div>
            </Router>
        )
    }
}

class HomeRoute extends App {
    render() {
        return (
            <Home />
        )
    }
}
class MenuRoute extends App {
    render() {
        return (
            <Menu />
        )
    }
}
class OrderRoute extends App {
    render() {
        return (
            <Order />
        )
    }
}
class AboutRoute extends App {
    render() {
        return (
            <div>About</div>
        )
    }
}

