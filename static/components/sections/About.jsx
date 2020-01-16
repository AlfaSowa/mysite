import React from 'react'

import contentItems from '../../json/about.json'

export default function About () {
    return (
        <React.Fragment>
            {contentItems.map((item, index) => (
                <div key={index} className="about__row">
                    <div className="about__row_item">
                        <Year year={item.year} />
                        <Description item={item} />
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

function Year(props) {
    return (
        <div className="about__year">{props.year}</div>
    )
}

function Description(props) {
    return (
        <div className="about__description">
            <h3 className="about__description_title">{props.item.title}</h3>
            <span className="about__description_tags">{props.item.tags}</span>
            <div className="about__description_content">
                {props.item.description.map((item, index) => (
                    <p key={index}>{item.paragraph}</p>
                ))}
            </div>
        </div>
    )
}