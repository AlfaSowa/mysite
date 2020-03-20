import React from 'react';
import { Theme } from './Theme.jsx';

const dateBorn = new Date('May 16, 1989 14:00:00');
const dateNow = new Date();
const result = Math.floor((dateNow.getTime() - dateBorn.getTime()) / 1000 / 3600 / 24 / 365);
const count = 83.5;

export class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__inner'>
                    <nav className='header__item menu'>
                        <ul className='menu__list'>
                            {this.props.menu.map((item, index) => (
                                <li key={index} className='menu__item'>
                                    <a href='#' className='menu__link'>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='header__item'>
                        <div className='mission'>
                            <svg className='mission__icon'>
                                <use xlinkHref='#mission'></use>
                            </svg>
                            <div className='mission__text'>mission: find a job</div>
                        </div>
                    </div>

                    <div className='header__item header__info'>
                        <div className='header__info-item level'>
                            <div className='level__icon'>
                                <svg className='level__icon-svg'>
                                    <use xlinkHref='#level'></use>
                                </svg>
                            </div>
                            <div className='level__line'>
                                <span>LV. {result}</span>
                                <div className='level__line-count' style={{ transform: `translateX(${count}%)` }}></div>
                            </div>
                        </div>

                        <div className='header__info-item credits'>
                            <div className='credits__icon'>
                                <svg className='credits__icon-svg'>
                                    <use xlinkHref='#credits'></use>
                                </svg>
                            </div>
                            <div className='credits__line'>45 000</div>
                        </div>
                    </div>

                    <Theme />
                </div>
            </header>
        );
    }
}

Header.defaultProps = {
    menu: [
        {
            name: 'основная информация'
        }
    ]
};
