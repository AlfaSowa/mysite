import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Guides from '../content/Guides.jsx'
import DayPlans from '../content/DayPlans.jsx'

export default  class TabsComponent extends React.Component {

    getDefaultIndex() {
        let defaultIndex = 0;
        this.props.tabs.filter((tab, index) => {
            if (tab.content !== null) {
                defaultIndex = index;
            }
        });
        return defaultIndex;
    }

    render() {
        return (
            <Tabs className='tabs' defaultIndex={this.getDefaultIndex()}>
                <TabList className='tabs__list'>
                    {this.props.tabs.map(tab => (
                        <Tab 
                            className='tabs__item'
                            selectedClassName="tabs__item--selected"
                            key={shortid.generate()}
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>
                {this.props.tabs.map(tab => (
                    <TabPanel
                        className="tabs__panel"
                        selectedClassName="tabs__panel--selected"
                        key={shortid.generate()}
                    >
                        <Guides 
                            name={this.props.name}
                            description={this.props.description}
                            image={this.props.image}
                        />
                    </TabPanel>
                ))}
            </Tabs>
        )
    }
}

TabsComponent.defaultProps = {
    tabs: [
        {title: 'Travel guide', content: null }
    ]
}
TabsComponent.propTypes = {
    tabs: PropTypes.array.isRequired
};