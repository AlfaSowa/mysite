import React from 'react'

import contentItems from '../../json/about.json'

export default function About () {
    return (
        <React.Fragment>
            {contentItems.map((item, index) => (
                <div key={index} className={`about__item${index%2 ? '' : ' about__revers'}`}>
                    <div className="about__left">
                        { index%2 ? <Description title={item.title} description={item.description} /> : <Year year={item.year} /> }
                    </div>
                    <div className="about__right">
                        { index%2 ? <Year year={item.year} /> : <Description title={item.title} description={item.description} /> }
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

function Year(props) {
    return (
        <div className="about__year">
            <div className="about__year_number">{props.year}</div>
            <div className="icon about__year_icon"></div>
        </div>
    )
}

function Description(props) {
    return (
        <div className="about__description">
            <div className="about__description_content">
                <h3>{props.title}</h3>
                <div>
                    {props.description.map((item, index) => (
                        <p key={index} className={index == 0 ? 'about__description_tags' : ''}>{item.paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}