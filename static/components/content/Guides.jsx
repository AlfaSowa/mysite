import React from 'react';

import Weather from './modules/Weather.jsx';
import Twitter from './modules/social/Twitter.jsx';
import Instagram from './modules/social/Instagram.jsx';


export default  class Guides extends React.Component {
     
    render() {
        const placeNameStyle = {
            backgroundImage: `url(${this.props.image})`
        }
        return (
            <div className='guide'>
                <div className='module module__flex'>
                    <h2 style={ placeNameStyle} className='place__name'>{this.props.name}</h2>
                    <div className='place'>
                        <div className='place__description'>{this.props.description}</div>
                    </div>
                    <div className='place__sidebar'>
                        <div className='place__module'>
                            <div className='place__module_item'>
                                <Weather />
                            </div>
                        </div>
                        <div className='place__module'>
                            <div className='place__module_item'>население</div>
                        </div>
                        <div className='place__module'>
                            <div className='place__module_item'>билеты</div>
                        </div>
                        <div className='place__module'>
                            <div className='place__module_item'>проживание</div>
                        </div>
                    </div>
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