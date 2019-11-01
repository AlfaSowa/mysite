import React from 'react'
import shortid from 'shortid'

import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Works from './sections/Works.jsx'
import Contacts from './sections/Contacts.jsx'

import headerbg from '../img/1.jpg'

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
                                    <li onClick={(e) => this.goTo(e, item.name)} key={shortid.generate()} className="menu__item">
                                        <a className="menu__item_link" href={`#${item.name}`} data-description={item.description}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="header__bottom">
                        <div className="header__content">
                            <div className="header__content_title">Привет, меня зовут Алексей.</div>
                            <div className="header__content_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime ea, repellat totam culpa iure optio nisi delectus blanditiis ab quae vel animi officiis iste corrupti cumque labore necessitatibus, dolore ut. Odio nisi, perferendis enim assumenda dolorem velit eveniet quisquam provident non modi ducimus minima quasi aperiam illum tempora doloribus pariatur cupiditate blanditiis eius itaque culpa eum mollitia quis? Qui beatae aperiam nostrum odit odio maxime ea deserunt at ratione vitae quibusdam necessitatibus, soluta iusto accusamus perferendis tenetur quasi. Praesentium nobis doloribus odit, unde, fuga placeat iure tempora inventore nisi quae, in voluptates eligendi. Quas veritatis itaque impedit quam eos?</div>
                        </div>
                    </div>
                </header>
    
                {this.props.menu.map((section, index) => (
                    <section key={index} name={section.name} className={`module ${section.name}`}>
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
            description: 'немного обо мне и чем я занимался',
            content: <About />
        },
        {
            name: 'skills', 
            text: 'мои навыки', 
            description: 'то что я умею и знаю',
            content: <Skills />
        },
        {
            name: 'works', 
            text: 'мои работы', 
            description: 'работы и наработки сделанные мной',
            content: <Works />
        },
        {
            name: 'contacts', 
            text: 'контакты', 
            description: 'как связаться со мной',
            content: <Contacts />
        }
    ]
}

