import React from 'react';

export default class Tickets extends React.Component {
    
    render() {
        const title = 'tickets'
        return (
            <div onClick={() => this.props.showMore(title)} className='place__module'>
                <div className='place__module_item'>
                    <div className='tickets'>
                        <div>{title}</div>
                    </div>
                </div>
            </div>
        )
    }
}