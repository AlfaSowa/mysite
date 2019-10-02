import React from 'react'
import shortid from 'shortid';

export default class Sidebar extends React.Component {

    setContent = (itemName) => {
        this.props.showContent(itemName)
    }

    render() {
        return (
            <aside className="sidebar">
                {this.props.sidebarItems.map(item => (
                    <div className="sidebar__item" onClick={() => this.setContent(item.itemName)} key={shortid.generate()}>{item.itemName}</div>
                ))}
            </aside>
        )
    }
}