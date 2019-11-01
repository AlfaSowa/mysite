import React from 'react'
import shortid from 'shortid'

import img from "../../img/1.jpg";

export default class Works extends React.Component {

    state = {
        isShowDetails: true,
        title: '',
        description: ''
    }

    showDetailsWork = (title, description) => {
        console.log(title)

        this.setState({
            isShowDetails: !this.state.isShowDetails,
            title: title,
            description: description
        })
    }

    closeDetails = () => {
        this.setState({
            isShowDetails: !this.state.isShowDetails
        })
    }

    render() {
        return (
            <>
                <div className="grid grid__catalog">
                    {this.props.works.map((item, index) => (
                        <div key={index} className="grid__item">
                            <WorkCard 
                                title={item.title}
                                description={item.description}
                                index={index}
                                showDetailsWork={this.showDetailsWork}
                            />
                        </div>
                    ))}
                </div>
                
                {this.state.isShowDetails 
                    || <Details 
                        title={this.state.title}
                        description={this.state.description}
                        close={this.closeDetails}
                />}
            </>
        )
    }
}

class Details extends Works {
    render() {
        return(
            <div className="details">
                <div className="details__top">
                    <div className="details__title">{this.props.title}</div>
                    <div onClick={this.props.close} className="details__close"></div>
                </div>
                <div className="details__content">{this.props.description}</div>
            </div>
        )
    }
}

class WorkCard extends Works {

    getDetails = (e, title, description) => {
        e.preventDefault()
        this.props.showDetailsWork(title, description)
    }

    render() {
        return(
            <a onClick={(e) => this.getDetails(e, this.props.title, this.props.description)} className="card" href="#">
                <div className="card__icon"></div>
                <div className="card__content">
                    <div className="card__title">{this.props.title}</div>
                    <div className="card__description">{this.props.description}</div>
                </div>
                {this.props.index == 0 ? <div className="card__last">последняя работа</div> : null}
            </a>
        )
    }
}

/*<div className="card__icon" style={{background: `url(${item.img}) no-repeat 50% / cover`}}>
    <img src={item.img}/>
</div>*/

Works.defaultProps = {
    works: [
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing ',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'Lorem ipsum dolor, sit amet ',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing  Lorem ipsum dolor, sit amet consectetur adipisicing ',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'html',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: '1231231 123 12312 3123',
            description: 'Lorem ipsum dolor',
            img: img
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing  Lorem ipsum dolor, sit amet consectetur adipisicing ',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'html',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex? ipsum dolor, sit amet consectetur adipisicing elit. Est, ex?',
            img: img
        },
        {
            title: 'qweqwe qwe qw eqw ',
            description: 'Lorem ipsum dolor',
            img: img
        },
        {
            title: 'qweqwe qwe qw eqw ',
            description: 'Lorem ipsum dolor',
            img: img
        }
    ]
}