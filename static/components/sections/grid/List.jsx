import React from 'react'

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

                {this.state.isShowDetails || <Details detail={this.state.item} close={this.closeDetails} />}
            </React.Fragment>

        )
    }
}

const html = document.querySelector("html")

class Details extends React.Component {
    
    componentDidMount = () => {
        html.classList.add("details--active")
    }
    
    componentWillUnmount = () => {
        html.classList.remove("details--active")
    }

    render() {
        const { close, detail} = this.props
        return(
            <div className="details">
                <div className="details__space">
                    <div className="details__inner">
                        <div className="details__header">
                            <div className="details__title">{detail.title}</div>
                            <div onClick={close} className="details__close"></div>
                        </div>
        
                        <div className="details__content">
                            {detail.content ? detail.content.map((item, index) => (
                                <DetailsTxt key={index} item={item}/>
                            )): null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class DetailsTxt extends React.Component {
    state = {
        showTxt: false
    }

    showTxt = () => {
        this.setState({
            showTxt: !this.state.showTxt
        }) 
    }

    render(){
        return(
            <div className="details__item">
                <span className={`details__item_toggler ${this.props.item.txt ? 'details__item_dropdown' : ''}`} onClick={this.showTxt}>{this.props.item.paragraph}</span>
                {this.props.item.txt 
                    ? <p className={`details__item_txt ${this.state.showTxt ? 'details__item_txt--active' : ''}`}>{this.props.item.txt}</p>
                    : null
                }
            </div>
        )
    }
}
