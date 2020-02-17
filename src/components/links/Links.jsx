import React from 'react'

export const Links = props => {

    return(
        <div className="refs">
            <ul className="refs__list">
                {props.links.map((item, index) => (
                    <li key={index} className="refs__item">
                        <a className="refs__link" href={item.link} target="_blank">{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Links.defaultProps = {
    links: [
        {
            title: 'Мое резюме на hh',
            link: 'https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879'
        },
        {
            title: 'Мое резюме на LinkedIn',
            link: 'https://www.linkedin.com/in/alexey-tamson-48ba51194/'
        },
        {
            title: 'Мой репозиторий на GitHub',
            link: 'https://github.com/Grimmino'
        },
        {
            title: 'Мой профиль на CodeWars',
            link: 'https://www.codewars.com/users/Grimmino'
        }
    ]
}