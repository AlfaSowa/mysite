import React from 'react'
import shortid from 'shortid';


export default class Content extends React.Component {

    render() {
        return (
            <div className="page">
                {this.props.content.map(item => (
                    <React.Fragment key={shortid.generate()}>
                        <h1>{item.itemName}</h1>
                        <div className="page__content">{item.itemContent}</div>
                    </React.Fragment>
                ))}
            </div>
        )
    }
}