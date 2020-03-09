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
		isShowTree: false
	};

	showSkill = (e, item) => {
		this.setState({
			skill: item,
			isShowSkill: true
		});
	};

	ShowTree = () => {
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
							<div onClick={e => this.showSkill(e, item)} className='skills__box'>
								{item.name}
							</div>
						</li>
					))}
				</ul>

				{!isShowSkill || <SkillInfo ShowTree={this.ShowTree} skill={skill} />}
				{!isShowTree || <Tree skill={skill} ShowTree={this.ShowTree} />}
			</React.Fragment>
		);
	}
}

const SkillInfo = props => {
	const { skill, ShowTree } = props;
	return (
		<div className='skills__inner'>
			<div className='skills__level'>
				<div className='skills__level-line' style={{ transform: `translateY(-${skill.level}%)` }}></div>
			</div>

			<Branches ShowTree={ShowTree} item={skill} />

			<div onClick={ShowTree} className='skills__showtree'>
				<div className='skills__showtree-icon'>{treeIconSvg}</div>
			</div>
		</div>
	);
};
