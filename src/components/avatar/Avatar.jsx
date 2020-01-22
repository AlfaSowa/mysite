import React from 'react'

export default class Avatar extends React.Component {

    render(){
        return(
            <div className="avatar">
                <div className="avatar__photo"></div>
                <div className="avatar__inner">
                    <span className="avatar__description"></span>
                </div>
            </div>
        )
    }
}