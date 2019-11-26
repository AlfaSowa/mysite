import React from 'react'
import shortid from 'shortid'

export default class Item extends React.Component {

    getDetails = (e, item) => {
        e.preventDefault()
        this.props.showDetailsWork(item)
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid__item">
                    <a onClick={(e) => this.getDetails(e, this.props.item)} href="#" className="card">
                        <div className="card__content">
                            <div className="card__title">{this.props.item.title}</div>
                            
                            {this.props.item.description 
                                ? <div className="card__description">{this.props.item.description}</div>
                                : null
                            }
                        </div>

                        {this.props.item.level 
                            ? <div className="card__percentage" style={{ bottom: `${this.props.item.level}%` }}></div>
                            : null
                        }

                        {this.props.catalog && this.props.index == 0 ? <div className="card__last">мой GitHub</div> : null}
                    </a>

                </div>
            </React.Fragment>
        )
    } 
}