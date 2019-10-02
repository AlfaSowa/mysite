import React from 'react'
import shortid from 'shortid';

import Sidebar from '../sidebar/Sidebar.jsx'

export default class Css extends React.Component {

    render() {
        return (
            <div className='content'>
                <Sidebar sidebarItems={this.props.sidebaritems} />
                <div>Css</div>
            </div>
        )
    }
}

Css.defaultProps = {
    sidebaritems: [
        {itemName: 'Sass'},
        {itemName: 'PostCSS'},
        {itemName: 'Flex'},
        {itemName: 'Animation'},
        {itemName: 'Media'},
        {itemName: 'BEM'}
    ]
};