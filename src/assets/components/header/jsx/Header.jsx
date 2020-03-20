import React from 'react';

const dateBorn = new Date('May 16, 1989 14:00:00');
const dateNow = new Date();
const result = Math.floor((dateNow.getTime() - dateBorn.getTime()) / 1000 / 3600 / 24 / 365);
const count = 83.5;

export class HeaderInfo extends React.Component {
    render() {
        return (
            <div className='header__item header__info'>
                <div className='header__info-item mission'>
                    <div className='mission__icon'>
                        <svg className='mission__icon-svg'>
                            <use xlinkHref='#mission'></use>
                        </svg>
                    </div>

                    <div className='mission__text'>
                        mission: <b>searching for a job</b>
                    </div>
                </div>

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
        );
    }
}
