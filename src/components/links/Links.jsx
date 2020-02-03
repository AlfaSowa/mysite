import React from 'react'

export default class Links extends React.Component {

    render(){
        return(
            <div className="links">
                <ul className="links__list">
                    {this.props.links.map((item, index) => (
                        <li key={index} className="links--item">
                            <a className="hero__links_link" href={item.link} target="_blank">{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Links.defaultProps = {
    links: [
        {
            title: 'Мое резюме на hh',
            link: 'https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879'
        },
        {
            title: 'Мое резюме на LinkedIn',
            link: 'https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879'
        },
        {
            title: 'Мой репозиторий на GitHub',
            link: 'https://hh.ru/resume/ffd982adff015f658b0039ed1f79534c574879'
        }
    ]
}