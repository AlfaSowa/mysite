import React from 'react'

export default class Info extends React.Component {

    render(){
        return(
            <div className="info">
                <ul className="info__list">
                    <li className="info__item">
                        <span className="info__item_row info__item_title">уровень</span>
                        <span className="info__item_row info__item_reult">30</span>
                    </li>

                    <li className="info__item">
                        <span className="info__item_row info__item_title">стоимость найма</span>
                        <span className="info__item_row info__item_result">30 000 руб.</span>
                    </li>

                    <li className="info__item">
                        <span className="info__item_row info__item_title">родной город</span>
                        <span className="info__item_row info__item_result">Челябинск</span>
                    </li>

                    <li className="info__item">
                        <span className="info__item_row info__item_title">фракция</span>
                        <span className="info__item_row info__item_result">frontend-разработчик</span>
                    </li>
                </ul>
            </div>
        )
    }
}