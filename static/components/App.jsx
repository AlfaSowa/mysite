import React from 'react'
import shortid from 'shortid'

//----grid----
import List from './sections/grid/List.jsx'
import works from '../json/works.json'
import skills from '../json/skills.json'
//----gridend----

import About from './sections/About.jsx'

export default class App extends React.Component { 

    state = {
        activHeader: ''
    }
    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            let activeClass = window.scrollY > 200 ? activeClass = 'header__top--active' : ''
            this.setState({activHeader: activeClass})
            
        })

        let sections = document.querySelectorAll('section')

        sections.forEach(elem => {
            window.addEventListener('scroll', () => {
                window.scrollY >= elem.offsetTop - 500 ? elem.classList.add('showsection')  : elem.classList.remove('showsection')
            })
        })
    }

    goTo = (e, name) => {
        e.preventDefault()
        let destination = document.querySelector(`section[name=${name}]`).offsetTop - 100
        console.log(destination)
    }

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className={`header__top ${this.state.activHeader}`}>
                        <div className="logo">
                            <a className="logo__link" href="#">Portfolio</a>
                        </div>
                        <nav className="menu">
                            <ul className="menu__list">
                                {this.props.menu.map(item => (
                                    <li /*onClick={(e) => this.goTo(e, item.name)}*/ key={shortid.generate()} className="menu__item">
                                        <a className="menu__item_link" href={`#${item.name}`}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
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
    
                {this.props.menu.map((section, index) => (
                    <section id={section.name} key={index} name={section.name} className={`module ${section.name}`}>
                        <h2 className="module__title">{section.text}</h2>
                        <div className={`module__content ${section.name}__content ${section.name == 'skills' || section.name == 'works' ? 'container' : ''}`}>
                            {section.content}
                        </div>
                    </section>
                ))}

                <footer>footer</footer>
            </React.Fragment>
        )
    }
}

App.defaultProps = {
    menu: [
        {
            name: 'about', 
            text: 'обо мне',
            content: <About />
        },
        {
            name: 'skills', 
            text: 'мои навыки',
            content: <List content={skills} />
        },
        {
            name: 'works', 
            text: 'мои работы',
            content: <List content={works} catalog/>
        }
    ]
}

