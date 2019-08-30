import React from 'react';

export default class Instagram extends React.Component {
    render() {
        return (
            <div className='social'>
                <div className='social__new'>3 новых поста в инстаграме по хештегу города/страны</div>
                <div className='social__popular'>3 самых популярных поста в инстаграме по хештегу города/страны</div>
            </div>
        )
    }
}