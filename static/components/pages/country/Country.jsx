import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import CountryList from './CountryList.jsx'

export default class Country extends React.Component {
    render() {
        return (
            <div>
                <CountryList />
                <ul className="submenu">
                    <li className="submenu__item">
                        <Link to='#'>England</Link>
                    </li>
                    <li className="submenu__item">
                        <Link to='#'>Russian</Link>
                    </li>
                </ul>
            </div>
        )
    }
}