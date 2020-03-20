import React from 'react';

import tree from '../json/tree.json';
import { treeIconSvg } from '../js/svg';

import Header from './Header.jsx';
import Branches from './Branches.jsx';
import Tree from './Tree.jsx';

export default class Skills extends React.Component {
    state = {
        skill: false,
        isShowSkill: false,
        isShowTree: false,
        tabsRef: [],
        getTabsRef: (el) => {
            this.state.tabsRef.push(el);
        }
    };

    showSkill = (e, item) => {
        this.state.tabsRef.forEach((item) => {
            item.classList.contains('skills__box--active') ? item.classList.remove('skills__box--active') : null;
        });

        e.target.classList.add('skills__box--active');

        this.setState({
            skill: item,
            isShowSkill: true
        });
    };

    showTree = () => {
        console.log(123123);
        this.setState({
            isShowTree: !this.state.isShowTree
        });
    };

    render() {
        const { skill, isShowTree, isShowSkill } = this.state;
        return (
            <React.Fragment>
                <ul className='skills__list'>
                    {tree.map((item, index) => (
                        <li key={index} className='skills__item'>
                            <div
                                onClick={(e) => this.showSkill(e, item)}
                                // className={`skills__box ${isActive || 'skills__box--active'}`}
                                className='skills__box'
                                ref={this.state.getTabsRef}
                            >
                                {item.name}
                            </div>
                        </li>
                    ))}
                </ul>

                {!isShowSkill || <SkillInfo showTree={this.showTree} skill={skill} />}
                {!isShowTree || <Tree skill={skill} showTree={this.showTree} />}
            </React.Fragment>
        );
    }
}

class SkillItem extends Skills {
    active = () => {
        this.props.showSkill(this.props.item);
    };

    render() {
        return (
            <li className='skills__item'>
                <div onClick={this.active} className={`skills__box ${isActive || 'skills__box--active'}`}>
                    {this.props.item.name}
                </div>
            </li>
        );
    }
}

const SkillInfo = (props) => {
    const { skill, showTree } = props;
    return (
        <div className='skills__inner'>
            <div className='skills__level'>
                <div className='skills__level-line' style={{ transform: `translateY(-${skill.level}%)` }}></div>
            </div>

            <Branches showTree={showTree} item={skill} />

            <div onClick={showTree} className='skills__showtree'>
                <div className='skills__showtree-icon'>{treeIconSvg}</div>
            </div>
        </div>
    );
};
