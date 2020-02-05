import React from 'react'

export default class Info extends React.Component {

    render(){
        return(
            <div className="info">
                <ul className="info__list">
                    {this.props.info.map((item, index) => (
                        <li key={index} className="info__item">
                            <span className="info__item_row info__item_title">{item.title}</span>
                            <span className="info__item_row info__item_result">{item.result}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Info.defaultProps = {
    info: [
        {
            title: 'стоимость найма',
            result: '30 000 руб.'
        },
        {
            title: 'родной город',
            result: 'Челябинск'
        },
        {
            title: 'фракция',
            result: 'frontend-разработчик'
        }
    ]
}