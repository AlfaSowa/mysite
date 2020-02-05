import React from 'react'

export default class Avatar extends React.Component {

    render(){
        const dateBorn = new Date('May 16, 1989 14:00:00')
        const dateNow = new Date()
        const result = ((((dateNow.getTime() - dateBorn.getTime()) / 1000) / 3600) / 24) / 365
        return(
            <div className="avatar">
                <div className="avatar__photo"></div>
                <div className="avatar__level">
                    <div className="avatar__level_box"><span>lv</span>{Math.floor(result)}</div>
                </div>
            </div>
        )
    }
}