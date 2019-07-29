import React, { Component } from 'react';

import Last from '../../Last/Last.jsx';
import Welcome from '../../sidebar/Welcome.jsx'
import Reg from '../../sidebar/Reg.jsx'

export default class FrontPage extends Component {
    state = {
        regestration: false
    }

    render() {
        //const welcome = (this.state.regestration) ? <Welcome /> : <Reg />
        return (
            <div className='fp'>
                <Last />
            </div>
        )
    }
}