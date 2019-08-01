import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TabsContent from './TabsContent.jsx';

export default  class TabsComponent extends Component {

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
                    {this.props.tabs.map((tab, index) => (
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
                        {tab.content}
                    </TabPanel>
                ))}
            </Tabs>
        )
    }
}

TabsComponent.defaultProps = {
    tabs: [
        { 
            title: 'Travel guide', 
            content: <TabsContent tabContent={'Travel guide'} /> 
        },
        { 
            title: 'Day plans',
            content: <TabsContent tabContent={'Day plans'}/>
        }
    ]
};