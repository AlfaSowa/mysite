import React from 'react';

export default class Weather extends React.Component {
    render() {
        return (
            <div className='social'>
                <div className='social__new'>3 новых твита по хештегу города/страны</div>
                <div className='social__popular'>3 самых популярных твита по хештегу города/страны</div>
            </div>
        )
    }
}