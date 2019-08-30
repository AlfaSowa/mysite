import React from 'react';

import Place from './modules/Place.jsx';
import Twitter from './modules/social/Twitter.jsx';
import Instagram from './modules/social/Instagram.jsx';


export default  class Guides extends React.Component {
     
    render() {
        const placeNameStyle = {
            backgroundImage: `url(${this.props.image})`
        }
        return (
            <div className='guide'>
                <div className='module'>
                    <h2 style={ placeNameStyle} className='module__title_first'>London</h2>
                    <Place />
                </div>
                <div className='module'>
                    <h2 className='module__title'>Twitter</h2>
                    <Twitter />
                </div>
                <div className='module'>
                    <h2 className='module__title'>Instagram</h2>
                    <Instagram />
                </div>
            </div>
        )
    }
}