import React from 'react'

import Header from './header/Header.jsx'

import Hero from './hero/Hero.jsx'

//----grid----
import List from './sections/grid/List.jsx'
import works from '../json/works.json'
import skills from '../json/skills.json'
//----gridend----

import About from './sections/About.jsx'
import PageSpeed from './api/PageSpeed.jsx'

export default class App extends React.Component { 

    state = {
        sectionRef: [],
        setSectionRef: (e) => {
            this.state.sectionRef.push(e)
        }
    }

    componentDidMount = () => {
        this.state.sectionRef.forEach(elem => {
            window.addEventListener('scroll', () => {
                window.scrollY >= elem.offsetTop - 500 ? elem.classList.add('showsection')  : elem.classList.remove('showsection')
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header menu={this.props.sections}/>


                <main>
                    <Hero />
                    
                    <article>
                        {this.props.sections.map((section, index) => (
                            <section ref={this.state.setSectionRef} id={section.name} key={index} name={section.name} className={`module ${section.name}`}>
                                <h2 className="module__title">{section.text}</h2>
                                <div className={`module__content ${section.name}__content ${section.name == 'skills' || section.name == 'works' ? 'container' : ''}`}>
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </article>
                </main>
            </React.Fragment>
        )
    }
}

App.defaultProps = {
    sections: [
        {
            name: 'about', 
            text: 'обо мне',
            content: <About />
        },
        {
            name: 'skills', 
            text: 'навыки',
            content: <List content={skills} />
        },
        {
            name: 'works', 
            text: 'работы',
            content: <List content={works} catalog/>
        }
    ]
}

