import React from 'react'

import avatar from '../../img/1.jpg'

export default class Hero extends React.Component {

    render(){
        return(
            <aside className="hero">
                <div className="hero__inner">
                    <div className="hero__item hero__pic" style={{ background: `url(${avatar}) no-repeat top left / cover`}}>
                        <div className="hero__pic_title">Tamson Aleksei</div>

                        <div className="hero__pic_main">
                            <div className="hero__pic_short-title">Frontend dev</div>
                            
                            <ul className="hero__pic_short-list">
                                <li className="hero__pic_short-item">html/css</li>
                                <li className="hero__pic_short-item">javascript/typescript</li>
                                <li className="hero__pic_short-item">react/redux</li>
                            </ul>
                        </div>
                    </div>


                    <div className="hero__item hero__content">
                        <span className="alarm">Сайт находится в разработке</span>
                        <p>Занимаюсь фронтенд частью в веб разработке. Этот сайт демонстрирует мои ключевые навыки во фронтенде, верстке (HTML/CSS), а так же знание react.</p>
                        <p>На сайте представленна информация обо мне чем я занимался, мои навыки и знания, а так же примеры некоторых моих работ.</p>
                        <p>Так же сам сайт представлен как пример  и его код можно посмотреть на GitHub</p>

                        <a className="btn btn__link" href="https://github.com/Grimmino/mysite">GitHub репозиторий сайта</a>
                    </div>

                    <ul className="hero__item hero__links">
                        <li className="hero__links_item">
                            <a className="hero__links_link" href="https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879" target="_blank">Мой репозиторий на GitHub</a>
                        </li>
                        <li className="hero__links_item">
                            <a className="hero__links_link" href="https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879" target="_blank">Мое резюме на hh</a>
                        </li>
                        <li className="hero__links_item">
                            <a className="hero__links_link" href="https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879" target="_blank">Мое резюме на LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </aside>
        )
    }
}