import React from 'react'

export default class App extends React.Component {

    state ={
        showMenu: false
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render(){
        return(
            <header className="header">
                <div className="header__top">
                    <div className="logo">
                        <a className="logo__link" href="#">Portfolio</a>
                    </div>

                    <nav className={`menu ${this.state.showMenu ? 'menu--active' : ''}`}>
                        <ul className="menu__list">
                            {this.props.menu.map((item, index) => (
                                <li onClick={this.toggleMenu} key={index} className="menu__item">
                                    <a className="menu__item_link" href={`#${item.name}`}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="hamburger" onClick={this.toggleMenu}></div>
                </div>

                <div className="header__bottom container">
                    <div className="header__content">
                        <div className="header__content_title">Привет, меня зовут Алексей.</div>
                        <div className="header__content_description">
                            <p className="alarm">Сайт находится в разработке, информация находящаяся здесь пока что не верная</p>
                            <p>Занимаюсь фронтенд частью в веб разработке. Этот сайт демонстрирует мои ключевые навыки во фронтенде, верстке (HTML/CSS), а так же знание react.</p>
                            <p>На сайте представленна информация обо мне чем я занимался, мои навыки и знания, а так же примеры некоторых моих работ.</p>
                            <p>Так же сам сайт представлен как пример  и его код можно посмотреть на GitHub</p>
                            <a className="btn btn__link" href="https://github.com/Grimmino/mysite">GitHub репозиторий сайта</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}