import React from 'react'
import shortid from 'shortid'

import contentItems from '../../json/about.json'

export default class About extends React.Component {
    render() {
        return (
            <>
                {contentItems.map((item, index) => (
                    <div key={shortid.generate()} className={`about__item${index%2 ? '' : ' about__revers'}`}>
                        <div className="about__left">
                            { index%2 ? <Description title={item.title} description={item.description} /> : <Year year={item.year} /> }
                        </div>
                        <div className="about__right">
                            { index%2 ? <Year year={item.year} /> : <Description title={item.title} description={item.description} /> }
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

class Year extends About {
    render() {
        return (
            <div className="about__year">
                <div className="about__year_number">{this.props.year}</div>
                <div className="icon about__year_icon"></div>
            </div>
        )
    }
}

class Description extends About {
    render() {
        return (
            <div className="about__description">
                <div className="about__description_content">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}