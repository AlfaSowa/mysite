import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

//pages
import FrontPage from '../pages/frontpage/FrontPage.jsx'
import Country from '../pages/country/Country.jsx'
//other
import AddSvgElements from '../add/AddSvgElements.jsx'

export default  class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="header">
		                <div className="header__top">
		                	<div className="logo"><a href="/">SOWA</a></div>
		                	<div className="header__line"></div>
		                	<ul className="menu">
                                <li className="menu__item">
                                    <Link to="/">main</Link>
                                </li>
                                <li className="menu__item btn__info">
                                    <Link to="/info">info</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/country">country</Link>
	                            </li>
                            </ul>
		                </div>
	                </header>

                    <div className='main'>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/info" component={Info} />
                        <Route exact path="/country" component={Place} />
                    </div>

                    <AddSvgElements />
                </div>
            </Router>
        )
    }
}

class Main extends App {
    render() {
        return (
            <FrontPage />
        )
    }
}

class Info extends App {
    render() {
        return (
            <div id="info" className="info">
			    <div className="info__avatar"></div>
			    <div className="info__txt">
			    	<h2 className="info__title">Hello, my name is <span>Alex</span></h2>
			    	<div className="info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis libero voluptatibus dignissimos eligendi, perspiciatis odit placeat illo eaque numquam neque inventore, sunt tenetur quis laborum minima hic id iure animi doloribus? Distinctio, incidunt, quidem voluptas eveniet ab laboriosam soluta doloremque laborum iusto accusamus suscipit dicta natus recusandae magnam veniam, eum deleniti ad. Non excepturi temporibus laboriosam eius! Eaque, ab quos. Voluptatem consequatur vero aliquid laborum alias labore, ad eos libero quibusdam quos dolor veniam soluta dignissimos ratione fugiat. Delectus sunt maxime veritatis labore doloribus. Ut esse commodi enim reprehenderit magnam saepe doloremque vel in, nemo totam aliquam labore voluptates?</div>
			    </div>
			    <div className="info__bottom">
			    	<button className="btn info__btn">contacts</button>
			    </div>
		    </div>
        )
    }
}

class Place extends App {
    render() {
        return (
            <Country />
        )
    }
}

