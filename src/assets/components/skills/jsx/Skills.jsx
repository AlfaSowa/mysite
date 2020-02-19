import React from 'react'

import tree from '../json/tree.json'

import Header from './Header.jsx'
import Branches from './Branches.jsx'
import Tree from './Tree.jsx'

export default class Skills extends React.Component {

    state = {
        skill: false,
        isShowTree: false
    }

    showSkill = (e, item) => {
        this.setState({
            skill: item
        })
    }

    ShowTree = () => {
        this.setState({
            isShowTree: !this.state.isShowTree
        })
    }

    render(){
        const { skill, isShowTree } = this.state
        return(
            <React.Fragment>
                <ul className="skills__list">
                    {tree.map((item, index) => (
                        <li key={index} className="skills__item">
                            <div onClick={(e) => this.showSkill(e, item)} className="skills__box">{item.name}</div>
                        </li>
                    ))}
                </ul>

                <div className="skills__inner">
                    {skill.name ? <Header item={skill} /> : null}
                    {skill.branches ? <Branches ShowTree={this.ShowTree} item={skill} /> : null}
                </div>

                {isShowTree ? <Tree skill={skill} ShowTree={this.ShowTree} /> : null}
            </React.Fragment>
        )
    }
}