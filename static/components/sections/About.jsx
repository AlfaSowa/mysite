import React from 'react'
import shortid from 'shortid'

export default class About extends React.Component {
    render() {
        return (
            <>
                {this.props.contentItems.map((item, index) => (
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
                <div className="about__year_number">{this.props.year} г.</div>
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

About.defaultProps = {
    contentItems: [
        { 
            title: 'Lorem, ipsum dolor.',
            description: 'Lorem, ipsum dolor.',
            year: '2014'
        },
        { 
            title: 'Lorem, ipsum dolor Lorem, ipsum dolor.',
            description: 'Lorem, ipsum dolor Lorem, ipsum dolorLorem, ipsum dolor Lorem, ipsum dolor Lorem, ipsum dolorLorem, ipsum dolorvLorem, ipsum dolor.',
            year: '2015'
        },
        { 
            title: 'Lorem, ipsum Lorem, ipsum .',
            description: 'Lorem, ipsum dolor Lorem, ipsum dolorLorem, ipsum dolorLorem, ipsum dolorLorem, ipsum dolor.',
            year: '2016'
        },
        { 
            title: 'Lorem, ipsum dolor.',
            description: 'Lorem, ipsum dolor.',
            year: '2017'
        },
        { 
            title: 'Lorem, ipsum dolor Lorem, ipsum dolor.',
            description: 'Lorem, ipsum dolor Lorem, ipsum dolorLorem, ipsum dolor Lorem, ipsum dolor Lorem, ipsum dolorLorem, ipsum dolorvLorem, ipsum dolor.',
            year: '2018'
        },
        { 
            title: 'Lorem, ipsum Lorem, ipsum .',
            description: 'Lorem, ipsum dolor Lorem, ipsum dolorLorem, ipsum dolorLorem, ipsum dolorLorem, ipsum dolor.',
            year: '2019'
        }
    ]
}