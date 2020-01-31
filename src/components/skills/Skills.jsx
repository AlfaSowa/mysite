import React from 'react'

export default class Skills extends React.Component {

    state = {
        isShowTree: false
    }

    showTree = () => {
        this.setState({
            isShowTree: !this.state.isShowTree
        })
    }

    render(){
        return(
            <React.Fragment>
                <ul className="skills__list">
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">HTML</li>
                </ul>
            </React.Fragment>
        )
    }
}

/*
<div onClick={this.showTree} className="skills__tree">1</div>
{!this.state.isShowTree || <Tree showTree={this.showTree}/>}
*/


class Tree extends Skills {
    render(){
        return(
            <div className="tree">
                <div className="tree__inner">
                    <span>asdasdasdd</span>
                    <div onClick={this.props.showTree} className="tree__close"></div>
                </div>
            </div>
        )
    }
}