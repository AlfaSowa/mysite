import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default  class Last extends Component {
    state = {
        tabs: [],
        country: true,
        firstTabName: `Путешествие по Англии`,
        lastTabName: 'Выберите город',
        pages: [],
        pagename: 'название вкладки', //сюда парсятся названия вкладок
    }

    createTabs = () => {
        const newTab = {
            id: Date.now()
        };
        this.setState(state => ({
            tabs: state.tabs.concat(newTab),
        }));
    }

    createPages = () => {
        const newPageList = {
            id: Date.now()
        };
        this.setState(state => ({
            pages: state.pages.concat(newPageList),
        }));
    }

    componentWillMount = () => {
        this.createTabs()
        this.createPages()
    }

    render() {
        return (
            <div className='fp__content'>
                <Tabs tabs={this.state.tabs}/>
                <Pages pages={this.state.pages}/>
            </div>
        )
    }
}

class Tabs extends Last {
    render() {
        return (
            <div className='fp__tabs'>
                <ul className='fp__tabs_list'>
                    <li className='fp__tabs_item'>{this.state.firstTabName}</li>
                    {this.state.country ? <li className='fp__tabs_item'>{this.state.lastTabName}</li> : null}
                </ul>
            </div>
        )
    }
}

class Pages extends Last {
    state = {
        page: []
    }

    createPage = () => {
        const newPage = {
            id: Date.now()
        };
        this.setState(state => ({
            page: state.page.concat(newPage),
        }));
    }

    componentWillMount = () => {
        this.createPage()
    }

    render() {
        return (
            <div className='fp__pages'>
                {this.props.pages.map(page => (
                    <Page key={page.id} page={this.state.page} />
                ))}
            </div>
        )
    }
}

class Page extends Pages {
    render() {
        return (
            <div className='fp__pages_list'>
                {this.props.page.map(elem => (
                    <div key={elem.id} className='page'>
                        <div className='page__title'>заголовок элемента страницы</div>
                    </div>
                ))}
            </div>
        )
    }
}