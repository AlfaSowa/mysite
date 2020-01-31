import React from 'react'

import Avatar from './avatar/Avatar.jsx'
import Info from './info/Info.jsx'
import Skills from './skills/Skills.jsx'
import Works from './works/Works.jsx'
import Links from './links/Links.jsx'
import Stats from './stats/Stats.jsx'

export default class App extends React.Component { 

    state = {
        workDetails: false
    }

    workDetails = (details) => {
        
        this.setState({
            workDetails: details
        })
    }

    getContent = (module) => {
        switch (module) {
            case 'skills':
                return <Skills />
            case 'works':
                return <Works workDetails={this.workDetails}/>
            case 'stats':
                return <Stats />
        }
    }

    render() {
        return (
            <div className="board">
                <div className="board__sidebar">
                    <Avatar />
                    <Info />
                    <Links />
                </div>

                <div className="board__inner">
                    
                    <div className="board__content">
                        <div className="board__title">Основная информация</div>

                        {this.props.modules.map((item,index) => (
                            <div key={index} className={`board__item module ${item.class}`}>
                                <h2 className="module__title">{item.name}</h2>
                                <div className="module__content">
                                    {this.getContent(item.class)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Details details={this.state.workDetails}/>

                </div>
                <div className="board__bg"></div>
            </div>
        )
    }
}

const Details = (props) => {
    const { details } = props

    const getRandomArbitrary= (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    const getDif = (number) => {
        console.log(number)
        switch (number) {
            case 1:
                return <div className="details__difficulty details__difficulty_low">A</div>
            case 2:
                return <div className="details__difficulty details__difficulty_mid">B</div>
            case 3:
                return <div className="details__difficulty details__difficulty_high">C</div>
        }
    }


    return(
        <div className="board__details details">
            <div className="details__inner">
                <div className="details__header">
                    {details.difficulty ? getDif(details.difficulty) : getDif(getRandomArbitrary(1,4))}
                    <span className="details__title">{details.title ? details.title : 'asdasdasda as das dsa d asd '}</span>
                </div>
                <p className="details__txt">{details.txt ? details.txt : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur placeat officia molestiae autem quo, enim sunt quae odio, quis cupiditate quaerat doloribus illum nisi expedita sit consequuntur ex neque! Voluptates, placeat saepe ad vero nulla sint, asperiores, iusto possimus soluta cumque sapiente tempora explicabo! Labore inventore qui ullam possimus.'}</p>
            </div>
        </div>
    )
}

App.defaultProps = {
    modules: [
        {
            name: 'навыки',
            class: 'skills'
        },
        {
            name: 'выполненые заказы',
            class: 'works'
        },
        {
            name: 'статистика',
            class: 'stats'
        },
    ]
}
