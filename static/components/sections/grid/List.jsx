import React from 'react'
import shortid from 'shortid'

import Item from './Item.jsx'

export default class List extends React.Component {

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
            <React.Fragment>
                <div className={`grid ${this.props.catalog ? "grid__catalog" : ""}`}>
                    {this.props.content.map((item, index) => (
                        <Item 
                            key={index} 
                            catalog={this.props.catalog ? true : false} 
                            item={item} 
                            index={index}
                            showDetailsWork={this.showDetailsWork} 
                        />
                    ))}
                </div>

                {this.state.isShowDetails || <Details item={this.state.item} close={this.closeDetails} />}
            </React.Fragment>

        )
    }
}

class Details extends List {
    render() {
        return(
            <div className="details">
                <div className="details__top">
                    <div className="details__title">{this.props.item.title}</div>
                    <div onClick={this.props.close} className="details__close"></div>
                </div>
            </div>
        )
    }
}