import React, { Component } from 'react';

import Guides from '../content/Guides.jsx';
import DayPlans from '../content/DayPlans.jsx';

export default  class TabsContent extends Component {
    render() {
        const content = this.props.tabContent
        return (
            <div>
                {(() => {
                    switch (content) {
                        case 'Travel guide':
                            return <Guides />
                        case 'Day plans':
                            return <DayPlans />
                    }
                })()}
            </div>
        )
    }
}