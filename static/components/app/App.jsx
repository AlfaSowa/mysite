import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import Html from '../html/Html.jsx'
import Css from '../css/Css.jsx'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="header">
                        <div className='logo'>sowa</div>
                        <nav className='menu'>
                            <ul className='menu__list'>
                                <li className='menu__item'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to="/html">html</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to="/css">css</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to="/javascript">javascript</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className='main'>
                        <Route path="/" exact component={HomeRoute} />
                        <Route path="/html" component={HtmlRoute} />
                        <Route path="/css" component={CssRoute} />
                        <Route path="/javascript" component={JsRoute} />
                    </div>
                </div>
            </Router>
        )
    }
}

class HomeRoute extends App {
    render() {
        return (
            <div>Home</div>
        )
    }
}
class HtmlRoute extends App {
    render() {
        return (
            <Html />
        )
    }
}
class CssRoute extends App {
    render() {
        return (
            <Css />
        )
    }
}
class JsRoute extends App {
    render() {
        return (
            <div>Js</div>
        )
    }
}

