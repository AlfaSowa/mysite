import React from 'react'

export const Avatar = props => {
    const dateBorn = new Date('May 16, 1989 14:00:00')
    const dateNow = new Date()
    const result = Math.floor(((((dateNow.getTime() - dateBorn.getTime()) / 1000) / 3600) / 24) / 365)

    return (
        <div className="avatar">
            <div className="avatar__photo">
                <div className="avatar__level"><span>lv</span>{result}</div>
            </div>
        </div>
    )
}