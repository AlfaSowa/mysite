import React from 'react'
import shortid from 'shortid';

//sidebar
import Sidebar from '../sidebar/Sidebar.jsx'
//content
import Content from '../content/Content.jsx'
//contentitems 
//-- semantic
import Semantic from './Semantic/Semantic.jsx'
//-- seo
import Seo from './Seo/Seo.jsx'
//--svg
import Svg from './Svg/Svg.jsx'


export default class Html extends React.Component {
    state = {
        content: []
    }

    showContetn = (itemName = `${this.props.sidebaritems[0].itemName}`) => {

        let getContent = this.props.sidebaritems.filter(item => item.itemName == itemName)

        this.setState({
            content: getContent
        })
    }

    UNSAFE_componentWillMount = () => {
        this.showContetn()
    }

    render() {
        return (
            <div className='content'>
                <Sidebar showContent={this.showContetn} sidebarItems={this.props.sidebaritems} />
                <Content content={this.state.content}/>
            </div>
        )
    }
}

Html.defaultProps = {
    sidebaritems: [
        { 
            itemName: 'Семантика',
            itemContent: <Semantic /> 
        },
        { 
            itemName: 'SEO', 
            itemContent: <Seo /> },
        { 
            itemName: 'SVG', 
            itemContent: <Svg />  
        }
    ]
};