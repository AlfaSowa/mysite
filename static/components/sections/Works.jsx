import React from 'react'
import shortid from 'shortid'

import works from '../../json/works.json'

export default class Works extends React.Component {

    state = {
        isShowDetails: true,
        item: []
    }

    showDetailsWork = (item) => {
        this.setState({
            isShowDetails: !this.state.isShowDetails,
            item: item
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
                    {works.map((item, index) => (
                        <div key={index} className="grid__item">
                            <WorkCard 
                                item={item}
                                index={index}
                                showDetailsWork={this.showDetailsWork}
                            />
                        </div>
                    ))}
                </div>
                
                {this.state.isShowDetails 
                    || <Details 
                        item={this.state.item}
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
                    <div className="details__title">{this.props.item.title}</div>
                    <div onClick={this.props.close} className="details__close"></div>
                </div>
                <div className="details__description">{this.props.item.description}</div>
                <div className="details__content">
                    {this.props.item.content.map((item, index) => (
                        <div key={index} className="details__content_item">{item.aboutWork}</div>
                    ))}
                </div>
            </div>
        )
    }
}

class WorkCard extends Works {

    getDetails = (e, item) => {
        e.preventDefault()
        this.props.showDetailsWork(item)
    }

    render() {
        return(
            <a onClick={(e) => this.getDetails(e, this.props.item)} className="card" href="#">
                <div className="card__icon"></div>
                <div className="card__content">
                    <div className="card__title">{this.props.item.title}</div>
                    <div className="card__description">{this.props.item.description}</div>
                </div>
                {this.props.index == 0 ? <div className="card__last">мой GitHub</div> : null}
            </a>
        )
    }
}