import React, { Component } from 'react';
import TabsComponent from '../../tabs/TabsComponent.jsx';
import SearchPlace from './SearchPlace.jsx';

export default class FrontPage extends Component {
    state = {
        regestration: false,
        tabtitle: ['Travel guide','Day plans'],
    }

    render() {
        return (
            <div className='fp'>
                <div className='fp__content'>
                    <SearchPlace />
                    <TabsComponent tabTitle={this.state.tabtitle}/>
                </div>
            </div>
        )
    }
}