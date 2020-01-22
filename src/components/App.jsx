import React from 'react'

import Avatar from './avatar/Avatar.jsx'
import Info from './info/Info.jsx'
import Skills from './skills/Skills.jsx'
import Works from './works/Works.jsx'
import Links from './links/Links.jsx'

export default class App extends React.Component { 

    state = {
        workDetails: false
    }

    workDetails = (details) => {
        
        this.setState({
            workDetails: details
        })
    }

    render() {
        return (
            <div className="board">
                <div className="board__sidebar">
                    <Avatar />

                    <Info />
                </div>

                <div className="board__inner">
                    <div className="board__content">
                        <div className="board__item module">
                            <h2 className="module__title">Навыки</h2>
                            <div className="module__content skills">
                                <Skills />
                            </div>
                        </div>
                        <div className="board__item module">
                            <h2 className="module__title">Выполненые заказы</h2>
                            <div className="module__content">
                                <Works workDetails={this.workDetails}/>
                            </div>
                        </div>
                        <div className="board__item module">
                            <h2 className="module__title">Ссылки</h2>
                            <div className="module__content">
                                <Links />
                            </div>
                        </div>
                    </div>

                    <div className="board__details details">
                        <div className="details__inner">
                            <span className="details__title">{this.state.workDetails.title ? this.state.workDetails.title : 'asdasdasda as das dsa d asd '}</span>
                            <p className="details__txt">{this.state.workDetails.txt ? this.state.workDetails.txt : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur placeat officia molestiae autem quo, enim sunt quae odio, quis cupiditate quaerat doloribus illum nisi expedita sit consequuntur ex neque! Voluptates, placeat saepe ad vero nulla sint, asperiores, iusto possimus soluta cumque sapiente tempora explicabo! Labore inventore qui ullam possimus.'}</p>
                        </div>
                    </div>


                </div>
                <div className="board__bg"></div>
            </div>
        )
    }
}
