import React from 'react'
import shortid from 'shortid';

import Module from '../../content/Module.jsx'

export default class Svg extends React.Component {

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

Svg.defaultProps = {
    modules: [
        { 
            Title: 'Что такое Svg?',
            Content: 'описание svg как подключать, анимация и др'
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