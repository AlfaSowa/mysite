import React from 'react'
import shortid from 'shortid';


import Module from '../../content/Module.jsx'

export default class Semantic extends React.Component {

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


Semantic.defaultProps = {
    modules: [
        { 
            Title: 'Что такое семантика?',
            Content: 'описание семантических тегов и их правильное использование'
        },
        { 
            Title: 'Семантические HTML теги',
            Content: 'Симантические HTML тегиСимантические HTML тегиСимантические HTML тегиСимантические HTML теги',
            Sub: [
                {
                    Title: 'Тег <header>',
                    Content: 'headerheader v vv vheaderheaderheader header header'
                },
                {
                    Title: 'Тег <nav>',
                    Content: 'asdasd asdasdas asdasd assadasdasdasd'
                }
            ]
        },
        { 
            Title: 'Основные законы семантики',
            Content: 'ывавыа ыва ываыва ыва ыв ва ыва ывав ыа'
        },
    ]
};