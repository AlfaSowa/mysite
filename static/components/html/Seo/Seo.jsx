import React from 'react'
import shortid from 'shortid';

import Module from '../../content/Module.jsx'

export default class Seo extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.modules.map(item => (
                    <Module 
                        key={shortid.generate()}
                        title={item.Title}
                        content={item.Content}
                        sub={item.Sub ? item.Sub : false}
                    />
                ))}
            </React.Fragment>
        )
    }
}

Seo.defaultProps = {
    modules: [
        { 
            Title: 'Что такое Seo?',
            Content: 'описание и как работают html теги нужных для seo и их правильное использование'
        },
        { 
            Title: 'Seo HTML теги',
            Content: 'Seo HTML тегиSeo HTML тегиSeo HTML тегиSeo HTML тегиSeo HTML теги',
            Sub: [
                {
                    Title: 'Тег <title>',
                    Content: 'titletitletitletitletitletitletitletitle'
                },
                {
                    Title: 'Тег <img>',
                    Content: 'imgimgimgimgimgimgimgimg'
                }
            ]
        },
    ]
};