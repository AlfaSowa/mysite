import React from 'react';

export default class People extends React.Component {
    
    render() {
        const title = 'people'
        return (
            <div onClick={() => this.props.showMore(title)} className='place__module'>
                <div className='place__module_item'>
                    <div className='people'>
                        <div>{title}</div>
                    </div>
                </div>
            </div>
        )
    }
}