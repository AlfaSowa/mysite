import React from 'react';

//info in sidebar
import { Avatar } from '../../sidebar/jsx/Avatar.jsx';
import { Info } from '../../sidebar/jsx/Info.jsx';
import { Links } from '../../sidebar/jsx/Links.jsx';
//main content
import Skills from '../../skills/jsx/Skills.jsx';
import Works from '../../works/jsx/Works.jsx';
import Stats from '../../stats/jsx/Stats.jsx';

export class Main extends React.Component {
    state = {
        workDetails: false
    };

    workDetails = (details) => {
        this.setState({
            workDetails: details
        });
    };

    getContent = (module) => {
        switch (module) {
            case 'skills':
                return <Skills />;
            case 'works':
                return <Works workDetails={this.workDetails} />;
            case 'stats':
                return <Stats />;
        }
    };
    render() {
        return (
            <div className='board'>
                <div className='board__sidebar'>
                    <Avatar />
                    <Info />
                    <Links />
                </div>

                <div className='board__inner'>
                    <div className='board__title'>Основная информация</div>

                    <div className='board__content'>
                        {this.props.modules.map((item, index) => (
                            <div key={index} className={`board__item ${item.class}`}>
                                <h2 className='board__item-title'>{item.name}</h2>
                                <div className='board__item-content'>{this.getContent(item.class)}</div>
                            </div>
                        ))}
                    </div>

                    {this.state.workDetails ? <Details details={this.state.workDetails} /> : null}
                </div>
            </div>
        );
    }
}

const Details = (props) => {
    const { details } = props;
    const getClassDifficulty = (number) => (number == 'A' ? 'low' : number == 'B' ? 'mid' : 'high');

    return (
        <div className='board__details details'>
            <div className='details__inner'>
                <div className='details__header'>
                    <div className={`details__difficulty details__difficulty--${getClassDifficulty(details.difficulty)}`}>
                        {details.difficulty}
                    </div>
                    <div className='details__title'>
                        <span>{details.title}</span>
                        <a href={details.link} target='_blank'>
                            перейти на сайт
                        </a>
                    </div>
                </div>

                <div className='details__content'>
                    {details.content.map((item, index) => (
                        <p key={index}>{item.paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

Main.defaultProps = {
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
        }
    ]
};
