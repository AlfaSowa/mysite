import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Menu from '../main/Menu.jsx'
import Home from '../main/Home.jsx'

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
                                    <Link to="/menu/">Menu</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to="/order/">Order</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to="/about/">About</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className='main'>
                        <Route path="/" exact component={HomeRoute} />
                        <Route path="/menu/" component={MenuRoute} />
                        <Route path="/order/" component={OrderRoute} />
                        <Route path="/about/" component={AboutRoute} />
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
            <div>Order</div>
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

