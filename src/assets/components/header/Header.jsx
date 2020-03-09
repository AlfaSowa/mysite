import React from 'react';

import Logo from './Logo.jsx';

export default class App extends React.Component {
	state = {
		showMenu: false
	};

	toggleMenu = e => {
		e.preventDefault();

		this.setState({
			showMenu: !this.state.showMenu
		});
	};

	render() {
		return (
			<header className='header'>
				<Logo />

				<nav className={`menu ${this.state.showMenu ? 'menu--active' : ''}`}>
					<ul className='menu__list'>
						{this.props.menu.map((item, index) => (
							<li key={index} className='menu__item'>
								<a onClick={e => this.toggleMenu(e)} className='menu__item_link' href={`#${item.name}`}>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className={`hamburger ${this.state.showMenu ? 'hamburger--active' : ''}`} onClick={this.toggleMenu}></div>
			</header>
		);
	}
}
