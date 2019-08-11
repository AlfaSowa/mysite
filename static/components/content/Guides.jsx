import React from 'react';

export default  class Guides extends React.Component {   
    render() {
        return (
            <div className='guide'>
                <div className='guide__content'>
                    <div className='guide__name'>{this.props.name}</div>
                    <div className='guide__description'>{this.props.description}</div>
                </div>
                <div className='guide__sidebar'>
                    <div className='guide__image'>
                        <img src={`${this.props.image}`} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}