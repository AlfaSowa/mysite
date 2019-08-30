import React from 'react'

import FrontPage from '../pages/frontpage/FrontPage.jsx'

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
		            <div className="header__top">
		            	<div className="logo"><a href="/dist">SOWA</a></div>
		            	<div className="header__line"></div>
		            </div>
	            </header>

                <div className='main'>
                    <FrontPage />
                </div>
            </React.Fragment>
        )
    }
}

